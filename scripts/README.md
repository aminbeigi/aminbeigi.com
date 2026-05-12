# Scripts

Python scripts used by the build and deploy pipeline.

## Requirements

- Python 3.14+
- [uv](https://docs.astral.sh/uv/)

## Setup

```
uv sync
```

## Scripts

### `generate-blogs` (`generate_blogs.py`)

Reads markdown files from `data/blogs/`, parses frontmatter, and writes `public/blogs.json` (sorted newest first). Runs automatically as part of `npm run build`.

```
uv run generate-blogs
```

### `deploy-to-s3` (`deploy_to_s3.py`)

Uploads `dist/` to S3 and invalidates the CloudFront distribution. Runs automatically in CI on pushes to `main`.

Requires the following environment variables (loaded from `.env` locally):

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

```
uv run deploy-to-s3
```

### `helper.py`

Shared utilities (logging setup, startup messages). Not runnable on its own — imported by the other scripts.
