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

This repository hosts the source code for my personal website and blog ->
http://aminbeigi.com.

## ️Requirements

- Node.js (v24.12.0+)
- npm (v11.6.2+)
- Git (for version control and precommit hooks)

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

## Deployment

Deployment is automated via the CI pipeline on pushes to `main`. It builds the site, uploads the `dist/` folder to S3, and invalidates the CloudFront cache.

## Directory Structure

```
src/
├── assets/         # Static assets (images, PGP key, etc.)
├── components/     # Page and UI components
│   ├── BlogIndexPage/
│   ├── BlogPostPage/
│   ├── HomePage/
│   ├── Layout/
│   ├── NavBar/
│   ├── NotFoundPage/
│   └── PgpPage/
└── test/           # Tests
scripts/            # Python scripts for blog generation and S3 deployment
```

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
