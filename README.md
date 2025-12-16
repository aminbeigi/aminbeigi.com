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

```
npm run build
```

This creates an optimised production build in the `dist/` folder:

```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── index-[hash].css  # Compiled and minified CSS
│   └── index-[hash].js   # Compiled and minified JavaScript
└── [other assets]      # Images, fonts, etc.
```

Upload the `dist/` folder to your web server or hosting service.

## Built With

**Core Technologies:**

- [React](https://reactjs.org/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool and dev server

**Additional Tools:**

- [React Router](https://reactrouter.com/) - Client-side routing
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Highlight.js](https://highlightjs.org/) - Syntax highlighting

**Development & Quality:**

- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
- [Vitest](https://vitest.dev/) - Testing framework
- [Husky](https://typicode.github.io/husky/) - Git hooks for automated code quality checks
- [lint-staged](https://github.com/okonet/lint-staged) - Run linters on staged files

## Contributions

Contributions are always welcome!  
Just make a [pull request](../../pulls).

## Authors

- Amin Beigi

## License

MIT License.
