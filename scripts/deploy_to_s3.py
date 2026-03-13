from helper import setup_logger, generate_app_start_message
import mimetypes
import os
import sys
from pathlib import Path

import boto3
from dotenv import load_dotenv


CLIENT_TYPE = "s3"
REGION_NAME = "ap-southeast-2"


def main() -> int:
    try:
        logger = setup_logger()
        logger.info(generate_app_start_message())
        load_dotenv()
        s3 = boto3.client(
            CLIENT_TYPE,
            region_name=REGION_NAME,
            aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
            aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
        )

        bucket_name = os.environ["AWS_S3_BUCKET_NAME"]
        dist_dir = Path(__file__).resolve().parent.parent / "dist"

        files = [object for object in dist_dir.rglob("*") if not object.is_dir()]

        for index, file_path in enumerate(files):
            s3_key = file_path.relative_to(dist_dir).as_posix()
            content_type, _ = mimetypes.guess_type(str(file_path))
            extra_args = {}
            if content_type:
                extra_args["ContentType"] = content_type
            s3.upload_file(str(file_path), bucket_name, s3_key, ExtraArgs=extra_args)
            logger.info(f"[{index + 1}/{len(files)}] uploaded {s3_key}")
        logger.info("successfully uploaded all files")
        return 0
    except Exception as e:
        logger.error("an unexpected error has occured: ", e)
        return -1


if __name__ == "__main__":
    sys.exit(main())
