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

## 📖 Description

This repository hosts the source code for my personal website and blog,
[aminbeigi.com](http://aminbeigi.com/).

The website is built using React, Typescript, Tailwind CSS and Vite.


## ⚙️ Requirements

-   Node.js (v20.16.0+)
-   npm
-   Python (v3.10+)
-   Git

## 🛠️ Installation and Setup

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

Your app should now be running at `http://localhost:3000`.

## 🗂️ Scripts

### `s3_upload` Script

The `scripts/s3_upload` script is used to upload build files from the `dist` folder on your local machine to an AWS S3 bucket.

### 🛠️ ️ How to Run

1. Configure Environment Variables

Before running the script, you need to set up the environment variables.

Copy the `.env.template` file to a new file called `.env`:

```
cp .env.template .env
```

The `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables
provide the necessary credentials and configurations for the AWS SDK to connect
to your S3 bucket.

2. Run the Script

```bash
npm run upload_s3
```



## 🎯 Contributions

Contributions are always welcome!  
Just make a [pull request](../../pulls).

## 📜 License

MIT License.
