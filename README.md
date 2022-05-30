# @devshareacademy/common-game-utils

Variety of helpful functions that are helpful for game development.

## Installation

```bash
# npm
npm install -E @devshareacademy/common-game-utils
# yarn
yarn add -E @devshareacademy/common-game-utils
```

## Usage

```typescript
import * as GameUtils from '@devshareacademy/common-game-utils';

GameUtils.array.shuffleArray([1, 2, 3]);
```

For more details on the library and the available methods, please see the documentation here: TODO.

## Local Development

### Install Project Dependencies

```bash
# npm
npm install
# yarn
yarn install --frozen-lockfile
```

### Testing Changes Locally

#### NPM Link

In order to test changes locally, you can can create a symlink to this npm package folder and then reference this folder in another project locally.

To create a symlink:

```bash
# run the following command from this projects directory
npm link
# change to the directory of the project you want to use this package in
cd ../../../some-other-project
# link-install the package
npm link @devshareacademy/common-game-utils
```

Please see the official documentation on [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link) for more information.

#### Verdaccio

Another option for testing changes locally is to use [Verdaccio](https://verdaccio.org/), which is a lightweight private proxy registry. With Verdaccio, you can publish this npm package to a local registry and then in another project you can install this package by pointing to the local registry.

There are a variety of ways to run Verdaccio, but in the following example we will be using [Docker](https://www.docker.com/).

##### Instructions

To setup and run Verdaccio:

```bash
docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
```


To create a user and login:

```bash
npm adduser --registry http://localhost:4873
```

To publish a package:

```bash
npm publish --registry http://localhost:4873
```

To install the local package in another project:

```bash
NPM_CONFIG_REGISTRY=http://localhost:4873 npm install @devshareacademy/common-game-utils
```
