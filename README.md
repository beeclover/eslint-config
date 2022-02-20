# @beeclover/eslint-config

A rule set of BEECLOVER's ESLint configurations based on Airbnb's.

## Installation

Install `@beeclover/eslint-config` package:

1. Install the correct versions of each package, which are listed by the command:

```
npm info "@beeclover/eslint-config" peerDependencies
```

if using **npm 5+**, use this shortcut

```
npx install-peerdeps --dev @beeclover/eslint-config
```

if using **yarn**, use this command

```
yarn add --peer --dev @beeclover/eslint-config
```

2. Install via package manager:

```
npm install --save-dev @beeclover/eslint-config
```

or

```
yarn --dev @beeclover/eslint-config
```

## Usage

### Javascript

```js
module.exports = {
  extends: [
    '@beeclover/eslint-config'
  ]
}
```
### @beeclover/eslint-config/typescript

> * @typescript-eslint/eslint-plugin
> * typescript

#### Typescript

```js
module.exports = {
  extends: [
    '@beeclover/eslint-config',
    '@beeclover/eslint-config/typescript'
  ]
}
```
### @beeclover/eslint-config/react

> * eslint-plugin-import
> * eslint-plugin-jsx-a11y
> * eslint-plugin-react
> * eslint-plugin-react-hooks

#### Javascript + React

```js
{
  "extends": [
    '@beeclover/eslint-config',
    '@beeclover/eslint-config/react',
  ],
}
``` 

#### Typescript + React

```js
module.exports = {
  extends: [
    '@beeclover/eslint-config',
    '@beeclover/eslint-config/typescript',
    '@beeclover/eslint-config/react'
  ]
}
```

### @beeclover/eslint-config/prettier

> * eslint-plugin-prettier

#### Prettier

works fine with local configuration file (e.g. .prettierrc)

```js
{
  "extends": [
    '@beeclover/eslint-config',
    '@beeclover/eslint-config/prettier',
  ],
}
```
