# auroratide.com

Welcome to the source code of my website! I have open-sourced the code for your benefit. Feel free to learn from the source or even offer suggestions of improvement.

## Tech Stack

**auroratide.com** demonstrates use of the following technologies:

* React
* MobX
* Babel Transpilation
* Webpack
* CSS Modules
* Eslint and Stylelint
* Jest, Testcafe

## Basic Commands

| Action          | Command               |
| --------------- | --------------------- |
| Build Project   | `npm run build`       |
| Clean Output    | `npm run clean`       |
| Start Server    | `npm start`           |
| Run All Tests   | `npm test`            |
| Developer Start | `npm run start:watch` |

## Create a Component

```
npm run components:create -- path/NameOfComponent
npm run components:create -- --styled path/NameOfComponent
```

This creates a component file and a respective test file. The test file will contain a basic "should render" test.

If the `--styled` option is provided, a CSS file will also be created for the component.

## Create a Digest

```
npm run digests:create -- name-of-digest
```
