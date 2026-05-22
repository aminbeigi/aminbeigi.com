<p align="center">
  <img src="assets/goose.png" height="200px" width="200px"/>
  <br/>
  <h3 align="center">aminbeigi.com</h3>
</p>
<br />

<p align="center">
  <a href="../../issues"><img src="https://img.shields.io/github/issues/aminbeigi/aminbeigi.com.svg?style=flat-square" /></a>
  <a href="../../pulls"><img src="https://img.shields.io/github/issues-pr/aminbeigi/aminbeigi.com.svg?style=flat-square" /></a>
  <img src="https://img.shields.io/github/license/aminbeigi/aminbeigi.com?style=flat-square">
</p>

## Description

This repository hosts the source code for my personal website and blog https://aminbeigi.com.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [Deployment](#deployment) for notes on how to deploy the project on a live system.

## ️Requirements

- Node.js (v20.19+)
- npm (v11.6.2+)
- Git - for version control and precommit hooks

## Installation and Setup

1. Clone the repository:

```
git clone https://github.com/aminbeigi/aminbeigi.com
cd aminbeigi.com
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

Your app should now be running at `http://localhost:5173`.

## Running the Tests

```
npm run test
```

## Lint and Format

Lint with ESLint:

```
npm run lint
npm run lint:fix
```

Format with Prettier:

```
npm run format
npm run format:check
```

`lint:fix` and `format` apply changes locally. `format:check` and `lint` (without `:fix`) only report issues—the same checks run in CI.

## Deployment

On pushes to `main`, the [CI pipeline](.github/workflows/pipeline.yml) builds the site and deploys it with the [deploy-to-s3](https://github.com/aminbeigi/deploy-to-s3) GitHub Action (`aminbeigi/deploy-to-s3@main`). The action uploads `dist/` to S3 and invalidates the CloudFront distribution.

Configure these repository secrets (Settings → Secrets and variables → Actions):

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

For local deploys and action development, see the [deploy-to-s3](https://github.com/aminbeigi/deploy-to-s3) repository.

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Contributions

Contributions are always welcome!  
Just make a [pull request](../../pulls).

## Authors

- Amin Beigi

## License

MIT License.
