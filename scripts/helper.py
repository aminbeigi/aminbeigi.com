from pathlib import Path
import logging
import inspect
import sys

def setup_logger() -> logging.Logger:
    """Configure basic logging to stdout."""
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(levelname)-s - %(filename)s:%(lineno)d - %(message)s",
        stream=sys.stdout,
    )
    return logging.getLogger()

def generate_app_start_message() -> str:
    frame = inspect.stack()[1]
    file_name = Path(frame.filename).name
    out = f"### starting application - {file_name} " + "#" * 29
    return out