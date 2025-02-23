import boto3
from botocore.exceptions import ClientError

import sys
from pathlib import Path

from .config_parser import BUCKET_NAME, DIST_PATH_STR
from .types import DistFiles
from .logger import logger


def get_dist_files() -> DistFiles:
    """Retrieve the paths for the assets, index, and icon files."""
    DIST_PATH = Path(DIST_PATH_STR)
    paths = {
        "assets_path": DIST_PATH / "assets",
        "index_path": DIST_PATH / "index.html",
        "icon_path": DIST_PATH / "icon.png",
    }

    missing_files = [
        f"{name}: {path.absolute()}"
        for name, path in paths.items()
        if not path.exists()
    ]

    if missing_files:
        raise FileNotFoundError(
            f"The following files are missing:\n" + "\n".join(missing_files)
        )

    return paths


def upload_file(s3, file_path: Path, bucket_key: str) -> None:
    """Upload a single file to the S3 bucket."""
    try:
        with open(file_path, "rb") as data:
            s3.Bucket(BUCKET_NAME).put_object(Key=bucket_key, Body=data)
            logger.info(f"Uploaded {file_path}")
    except Exception as e:
        logger.error(f"Failed to upload {file_path}: {e}", exc_info=True)
        raise


def upload_assets(s3, assets_path: Path) -> None:
    """Upload all files from the assets directory to S3."""
    for file_path in assets_path.glob("*"):
        if file_path.is_file():
            upload_file(s3, file_path, f"assets/{file_path.name}")


def upload_files(assets_path: Path, index_path: Path, icon_path: Path) -> None:
    """Upload all necessary files to the S3 bucket."""
    s3 = boto3.resource("s3")

    try:
        s3.Bucket(BUCKET_NAME).load()
    except ClientError:
        logger.error(f"The bucket {BUCKET_NAME} does not exist", exc_info=True)
        raise ValueError(f"The bucket {BUCKET_NAME} does not exist")

    upload_assets(s3, assets_path)
    upload_file(s3, index_path, index_path.name)
    upload_file(s3, icon_path, icon_path.name)


def main() -> None:
    """Main function to update the S3 bucket with required files."""
    logger.info("Attempting to update S3 Bucket...")

    try:
        dist_files = get_dist_files()
        upload_files(
            dist_files["assets_path"], dist_files["index_path"], dist_files["icon_path"]
        )

        logger.info("Successfully uploaded all files!")

    except Exception as e:
        logger.error(f"An error occurred: {e}", exc_info=True)
        sys.exit(1)


if __name__ == "__main__":
    main()
