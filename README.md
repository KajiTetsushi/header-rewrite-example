# header-rewrite-example

This example demonstrates how to serve a Node app under a designated subroute under a main domain site using Nginx as a proxy.

Example:

www.kajtetsushi.dev

- [`/app`](www.kajtetsushi.dev/app)

  You are reading the manual for this route.

- [`/hello`](www.kajtetsushi.dev/hello)

  See [the Hello instructions](hello/README.md) on how to implement this subroute.

--------

- [Tech](#tech)
- [System Requirements](#system-requirements)
- [Project Setup](#project-setup)
  - [1. Install all system required tools](#1-install-all-system-required-tools)
  - [2. Get a copy of the code](#2-get-a-copy-of-the-code)
  - [3. Install the project dependencies](#3-install-the-project-dependencies)
  - [4. (optional) Change the running port](#4-optional-change-the-running-port)
- [Running Locally](#running-locally)
  - [Development Mode](#development-mode)
  - [Production Mode](#production-mode)
- [Application Deployment](#application-deployment)
- [To-Do](#to-do)

## Tech

- TypeScript
- Axios
- React
- Express
- Node
- Nodemon
- TS-Node
- TS-Node-Dev
- Sass
- Parcel
- Pug

## System Requirements

- Nginx v1.x++
- Node v10.x++
- Yarn v1.x++
- PM2 v4.x++
- _(optional)_ Git v2.x++
  - used for cloning the repository.
  - will not be used if you choose to download the repository instead.

## Project Setup

### 1. Install all system required tools

See [System Requirements](#system-requirements) for what you need to get. For Nginx & Node & PM2, try [DigitalOcean's tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04).

### 2. Get a copy of the code

> **Note**: You can also download directly from the BitBucket source. See [Downloads](https://bitbucket.org/andrewsantarin/header-rewrite-example/downloads/) > "Download repository". Git is not needed.

```sh
git clone https://github.com/andrewsantarin/header-rewrite-example.git
cd header-rewrite-example
```

### 3. Install the project dependencies

```sh
yarn
```

### 4. _(optional)_ Change the running port

By default, this project runs on `http://localhost:8080`. To change the port to another number, copy [`/.env.example`](.env.example) into [`/.env`](.env) and set your preferred port number.

```dotenv
PORT=9090
```

## Running Locally

### Development Mode

```sh
yarn debug
```

With the help of TS-Node-Dev, the server runs on the TypeScript code. This compiles only [`/public`](./src/public) and [`/client`](./src/client) because Parcel watches them for changes instead of TS-Node-Dev.

### Production Mode

```sh
yarn build
```

Compiles all TSX & SCSS code in [`/src`](./src) to JS & CSS and outputs them into [`/dist`](./dist).

```sh
yarn start
```

```sh
pm2 start npm --name "header rewrite example" -- start
```

Serves the application on your local machine. Using `yarn` means you need to keep your terminal session locked & running. Using `pm2` means daemonizing the app so that you can continue working on the current terminal.

## Application Deployment

1. Repeat the steps in [Project Setup](#project-setup).
2. Copy the code in [`./nginx/nginx.conf`] to your instance configuration of this particular project.
3. Run the `yarn build` command as desribed in [Running Locally > Production Mode](#production-mode).
4. Run the server with `yarn` or `pm2`.
5. _(optional)_ Do the same for `hello.js`: [Instructions](hello/README.md).

## To-Do

- Open the browser on the designated local port after the initial build completes when running [Development Mode](#development-mode), a la [`create-react-app`](https://github.com/facebook/create-react-app)'s `yarn start`.
