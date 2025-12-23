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
INPUT_BLOGS_MARKDOWN_DIR_PATH = SCRIPT_DIR.parent / "data" / "blogs"


def setup_logger() -> logging.Logger:
    """Configure basic logging to stdout."""
    logging.basicConfig(
        level=logging.INFO,
        format="[%(asctime)s] [%(levelname)s] - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
        stream=sys.stdout,
    )
    return logging.getLogger()


class BlogPost(TypedDict):
    title: str
    date: str
    content: str


def extract_frontmatter_and_body(content: str) -> tuple[str, str, str]:
    """Extract YAML-style frontmatter and body content from markdown."""
    front_matter_regex_pattern = r"^---\n(.*?)\n---\n(.*)$"
    match = re.match(front_matter_regex_pattern, content, re.DOTALL)
    if not match:
        raise ValueError("no frontmatter found in markdown file")

    lines = [line.strip() for line in match.group(1).split("\n")]
    if len(lines) != 2:
        raise ValueError(f"expected exactly 2 frontmatter fields, got {len(lines)}")

    frontmatter: dict[str, str] = {}
    for line in lines:
        key, value = line.split(":", 1)
        frontmatter[key.strip()] = value.strip().strip("'\"")

    if "title" not in frontmatter:
        raise ValueError("missing required field 'title' in frontmatter")
    if "date" not in frontmatter:
        raise ValueError("missing required field 'date' in frontmatter")

    body = match.group(2).strip()
    return frontmatter["title"], frontmatter["date"], body


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
    logger = setup_logger()

    try:
        if not INPUT_BLOGS_MARKDOWN_DIR_PATH.exists():
            logger.error(f"blog directory not found: {INPUT_BLOGS_MARKDOWN_DIR_PATH}")
            return 1

        markdown_files = list(INPUT_BLOGS_MARKDOWN_DIR_PATH.glob("*.md"))
        if not markdown_files:
            logger.error(f"no markdown files found in {INPUT_BLOGS_MARKDOWN_DIR_PATH}")
            return 1

        blogs_data: dict[str, BlogPost] = {}
        for file_path in markdown_files:
            content = file_path.read_text(encoding="utf-8")
            title, date, body = extract_frontmatter_and_body(content)
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

        logger.info(f"generated blogs.json with {len(sorted_blogs)} posts")
        logger.info(f"output: {OUTPUT_FILE_PATH}")

        return 0

    except Exception as e:
        logger.error(f"error: {e}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
