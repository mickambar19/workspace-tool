# My pendings

## Table of contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [How to run the app](#how-to-run-the-app)
- [Why Vite](#why-vite)
- [Format your code](#format-your-code)
- [Catching errors in your code](#format-your-code)
- [Q&A](#q&a)

## Getting Started

### Prerequisites

- Node: 16.17.1
- NPM: 8.15.0

NPM is the recommended package manager in order to avoid confusions, although _yarn_ outperforms npm there are some caveats in the newer features added in yarn which might not work with some of the current dependencies. One of this features is called Plug and Play.(Classic yarn is ok but it will no longer have fixes)
More info about this could be read in [Yarn - Migration](https://yarnpkg.com/getting-started/migration)

It is highly recommended to use a node version manager as the node version might change in the future
and it will be required for you to install that different version.
[NVM Documentation](https://github.com/nvm-sh/nvm)
An .nvmrc file was added just for you to use the following command:

```
$ nvm use
```

### How to run the app

First install the dependencies with npm

```
  $ npm install
```

Then, you can just the application by executing the following command:

```
  $ npm run dev
```

## Why Vite

Pros:

- Faster dev startup
- Faster production build time

Cons

- In case we need somewhat a custom configuration which is not available yet with Vite we will have to spend some time on it.

Articles to read:
[Is Vite better than webpack?](https://blog.bitsrc.io/vite-is-better-than-webpack-d5dd59610d56)
[Storybook Performance: Vite vs Webpack - JS.ORG](https://storybook.js.org/blog/storybook-performance-from-webpack-to-vite/#:~:text=Compared%20to%20Webpack%205%20with,your%20changes%20in%20the%20browser.)

Why not Snowpack?
It is not longer maintained as per the site https://www.snowpack.dev/. It was to be
a good tool to use since it was fast and it was using esbuild under the hood, but since it is not longer
maintained it was not considered.

## Format your code

In order to make the code readable we should have a way to format our files without worrying about styles, indentation, parenthesis, brackets and some other. For that reason, prettier will be our friend. We will never forget about having the correct number of line breaks, indentation, and others. The following script will do it for us.

```
$ yarn run format
```

If you are using **vscode** you can download the extension and turn on the format on save mode.
You can open the settings.json file with the Preferences: Open Settings (JSON) command in the Command Palette (Ctrl+Shift+P). After that, add the following to your settings.json file:

```
 "editor.formatOnSave": true
```

See more on [Editor Integration](https://prettier.io/docs/en/editors.html#visual-studio-code)

In case you are using other editor for your code, you can start watching the files changes and formatting them automatically by executing

```
  $ npm run format:watch
```

## Catching errors in your code

> As in the oficial docs ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

Some cases eslint will help you with:

- avoid importing a file that does not exit
- not leaving console logs
- enforce to tackle accessibility issues
- implement hooks with the corresponding rules. [More info](https://reactjs.org/docs/hooks-rules.html)

## Q&A

- Why I got some errors while creating a commit?

  This means that you most likely have an error in your code or the files are not well formatted
