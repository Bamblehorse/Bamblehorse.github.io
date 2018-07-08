# Bamblehorse.github.io [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Build Status](https://travis-ci.org/Bamblehorse/Bamblehorse.github.io.svg?branch=master)](https://travis-ci.org/Bamblehorse/Bamblehorse.github.io)

## VS Code

### Workspace settings

```
// Support using flow through your node_modules folder, WARNING: Checking this box is a security risk. When you open a project we will immediately run code contained within it.
"flow.useNPMPackagedFlow": true,
// Enable/disable JavaScript validation. (For Flow)
"javascript.validate.enable": false
// Enable/disable default JavaScript formatter (For Prettier)
"javascript.format.enable": false,
// Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.
"prettier.eslintIntegration": true
```

### Plugins

- ESLint
- Prettier JavaScript Formatter
- Flow Language Support
- Babel ES6/ES7

## Flow

### Start:

`npx flow start`

### Stop:

`npx flow stop`

## Guide

https://medium.com/@sgroff04/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213

## Jest watch errors on OSX

```
upgrade watchman
brew install watchman
```

https://github.com/facebook/jest/issues/1767

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
