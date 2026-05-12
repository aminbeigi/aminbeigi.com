import pytest

from deploy_to_s3 import _get_dist_dir


def test_get_dist_dir_raises_when_missing(tmp_path):
    with pytest.raises(FileNotFoundError, match="dist directory not found"):
        _get_dist_dir(_base=tmp_path)
