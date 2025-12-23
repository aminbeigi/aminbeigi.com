from pathlib import Path
from typing import TypedDict
from datetime import datetime
import json
import logging
import re
import sys

# Use __file__ for reliable paths regardless of where script is run from
SCRIPT_DIR = Path(__file__).resolve().parent
OUTPUT_FILE_PATH = SCRIPT_DIR.parent / "public" / "blogs.json"
INPUT_BLOGS_MARKDOWN_DIR = SCRIPT_DIR.parent / "data" / "blogs"
FRONT_MATTER_REGEX_PATTERN = r"^---\n(.*?)\n---\n(.*)$"


def setup_logger() -> None:
    """Configure basic logging to stdout."""
    logging.basicConfig(
        level=logging.INFO,
        format="[%(asctime)s] [%(levelname)s] - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
        stream=sys.stdout
    )


class BlogPost(TypedDict):
    title: str
    date: str
    content: str


def extract_frontmatter(content: str) -> tuple[dict[str, str], str]:
    """Extract YAML-style frontmatter and body content from markdown."""
    match = re.match(FRONT_MATTER_REGEX_PATTERN, content, re.DOTALL)
    if not match:
        raise ValueError("No frontmatter found in markdown file")

    frontmatter: dict[str, str] = {}
    for line in match.group(1).split("\n"):
        if ":" in line:
            key, value = line.split(":", 1)
            # strip quotes and whitespace from value
            frontmatter[key.strip()] = value.strip().strip("'\"")

    body = match.group(2).strip()
    return frontmatter, body


def convert_title_to_slug(title: str) -> str:
    """Convert title to URL-friendly slug."""
    return re.sub(r"[\s\W-]+", "-", title.lower().strip()).strip("-")


def parse_date(date_str: str) -> datetime:
    """Parse date string to datetime for sorting."""
    try:
        return datetime.strptime(date_str, "%Y-%m-%d")
    except ValueError:
        # Fallback for different date formats
        return datetime.min


def main() -> int:
    """Generate blogs.json from markdown files. Returns exit code."""
    setup_logger()
    
    try:
        # validate input directory exists
        if not INPUT_BLOGS_MARKDOWN_DIR.exists():
            logging.error(f"Blog directory not found: {INPUT_BLOGS_MARKDOWN_DIR}")
            return 1

        # find all markdown files
        markdown_files = list(INPUT_BLOGS_MARKDOWN_DIR.glob("*.md"))
        if not markdown_files:
            logging.error(f"No markdown files found in {INPUT_BLOGS_MARKDOWN_DIR}")
            return 1

        # process each markdown file
        blogs_data: dict[str, BlogPost] = {}
        for file_path in markdown_files:
            content = file_path.read_text(encoding="utf-8")
            frontmatter, body = extract_frontmatter(content)

            title = frontmatter.get("title", file_path.stem)
            date = frontmatter.get("date") or frontmatter.get("created", "Unknown Date")
            slug = convert_title_to_slug(title)

            blogs_data[slug] = BlogPost(title=title, date=date, content=body)

        # sort by date (newest first)
        sorted_blogs = dict(
            sorted(
                blogs_data.items(),
                key=lambda item: parse_date(item[1]["date"]),
                reverse=True,
            )
        )

        # write output with newline at end (for Prettier compatibility)
        OUTPUT_FILE_PATH.parent.mkdir(parents=True, exist_ok=True)
        json_content = json.dumps(sorted_blogs, ensure_ascii=False, indent=2) + "\n"
        OUTPUT_FILE_PATH.write_text(json_content, encoding="utf-8")

        logging.info(f"Generated blogs.json with {len(sorted_blogs)} posts")
        logging.info(f"Output: {OUTPUT_FILE_PATH}")
        
        return 0
        
    except Exception as e:
        logging.error(f"Error: {e}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
