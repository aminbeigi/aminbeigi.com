"""Deploy dist/ files to an AWS S3 bucket."""

from helper import setup_logger, generate_app_start_message
import mimetypes
import os
import sys
import time
from pathlib import Path

import boto3
from dotenv import load_dotenv


CLIENT_TYPE = "s3"
REGION_NAME = "ap-southeast-2"
DIST_DIR_NAME = "dist"


def main() -> int:
    logger = setup_logger()
    try:
        logger.info(generate_app_start_message())
        load_dotenv()
        aws_access_key_id = os.environ["AWS_ACCESS_KEY_ID"]
        aws_secret_access_key = os.environ["AWS_SECRET_ACCESS_KEY"]
        s3 = boto3.client(
            CLIENT_TYPE,
            region_name=REGION_NAME,
            aws_access_key_id=aws_access_key_id,
            aws_secret_access_key=aws_secret_access_key,
        )

        bucket_name = os.environ["AWS_S3_BUCKET_NAME"]
        dist_dir = Path(__file__).resolve().parent.parent / DIST_DIR_NAME
        if not dist_dir.exists():
            raise FileNotFoundError(f"dist directory not found: {dist_dir}")

        files = [path for path in dist_dir.rglob("*") if not path.is_dir()]

        logger.info(
            f"starting s3 upload: bucket={bucket_name}, file_count={len(files)}..."
        )
        for index, file_path in enumerate(files):
            s3_key = file_path.relative_to(dist_dir).as_posix()
            content_type, _ = mimetypes.guess_type(str(file_path))
            extra_args = {}
            if content_type:
                extra_args["ContentType"] = content_type
            s3.upload_file(str(file_path), bucket_name, s3_key, ExtraArgs=extra_args)
            logger.info(f"[{index + 1}/{len(files)}] uploaded {s3_key}")
        logger.info("successfully uploaded all files")
        logger.info("starting cloudfront cache invalidation...")
        cloudfront = boto3.client(
            "cloudfront",
            region_name=REGION_NAME,
            aws_access_key_id=aws_access_key_id,
            aws_secret_access_key=aws_secret_access_key,
        )
        response = cloudfront.create_invalidation(
            DistributionId=os.environ["CLOUDFRONT_DISTRIBUTION_ID"],
            InvalidationBatch={
                "Paths": {"Quantity": 1, "Items": ["/*"]},
                "CallerReference": str(int(time.time())),
            },
        )
        invalidation_id = response["Invalidation"]["Id"]
        logger.info(f"cloudfront invalidation created: {invalidation_id}")
        return 0
    except Exception as e:
        logger.error(f"an unexpected error has occurred: {e}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
