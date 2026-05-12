# Scripts

Automation to deploy the site to S3.

## Requirements

- Python 3.14+
- [uv](https://docs.astral.sh/uv/)

## Setup

```
uv sync --group dev
```

## deploy_to_s3

Uploads `dist/` to S3 and invalidates the CloudFront distribution. Runs automatically in CI on pushes to `main`.

Requires the following environment variables (loaded from `.env` locally):

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

```
uv run python -m deploy_to_s3
```

## Development

Lint and format:

```
uv run --group dev ruff check .
uv run --group dev ruff format .
```

Test:

```
uv run --group dev pytest tests/ -v
```
