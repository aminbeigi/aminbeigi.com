"""Generate blogs.json from markdown files."""

from pathlib import Path
from typing import TypedDict
from datetime import date
import json
import re
import sys
from helper import setup_logger, generate_app_start_message

# Use __file__ for reliable paths regardless of where script is run from
SCRIPT_DIR = Path(__file__).resolve().parent
OUTPUT_FILE_PATH = SCRIPT_DIR.parent / "public" / "blogs.json"
INPUT_BLOGS_MARKDOWN_DIR_PATH = SCRIPT_DIR.parent / "data" / "blogs"


class BlogPost(TypedDict):
    title: str
    created_date: str
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


def format_display_date(date_str: str) -> str:
    """Format an ISO date string for display."""
    return date.fromisoformat(date_str).strftime("%b %d, %Y")


def main() -> int:
    logger = setup_logger()
    try:
        logger.info(generate_app_start_message())

        if not INPUT_BLOGS_MARKDOWN_DIR_PATH.is_dir():
            raise FileNotFoundError(
                f"input dir not found: {INPUT_BLOGS_MARKDOWN_DIR_PATH}"
            )

        markdown_files = list(INPUT_BLOGS_MARKDOWN_DIR_PATH.glob("*.md"))
        if not markdown_files:
            raise ValueError(
                f"no markdown files found in {INPUT_BLOGS_MARKDOWN_DIR_PATH}"
            )

        blogs_data: list[tuple[str, str, BlogPost]] = []
        for file_path in markdown_files:
            content = file_path.read_text(encoding="utf-8")
            title, date_str, body = extract_frontmatter_and_body(content)
            slug = convert_title_to_slug(title)
            blogs_data.append(
                (
                    slug,
                    date_str,
                    BlogPost(
                        title=title,
                        created_date=format_display_date(date_str),
                        content=body,
                    ),
                )
            )
            

        # sort by date (newest first) — ISO dates sort lexicographically
        blogs_data.sort(key=lambda item: item[1], reverse=True)
        sorted_blogs = {slug: post for slug, _, post in blogs_data}

        # write output with newline at end (for Prettier compatibility)
        OUTPUT_FILE_PATH.parent.mkdir(parents=True, exist_ok=True)
        json_content = json.dumps(sorted_blogs, ensure_ascii=False, indent=2) + "\n"
        OUTPUT_FILE_PATH.write_text(json_content, encoding="utf-8")

        logger.info(
            f"successfully generated blogs.json with {len(sorted_blogs)} posts in output {OUTPUT_FILE_PATH}"
        )
        return 0

    except Exception as e:
        logger.error(f"an unexpected error has occurred: {e}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
