from dotenv import load_dotenv
import os

load_dotenv()

BUCKET_NAME = os.getenv("BUCKET_NAME")
DIST_PATH_STR = os.getenv("DIST_PATH_STR")
