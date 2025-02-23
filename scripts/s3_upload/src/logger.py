import sys
import logging

logging.basicConfig(
    format="[%(asctime)s] - %(levelname)s - %(name)s - %(message)s",
    level=logging.INFO,
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler("upload_s3_logs.log"),
    ],
)

logger = logging.getLogger(__name__)
