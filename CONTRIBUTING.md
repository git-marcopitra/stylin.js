# CONTRIBUTING

Feel free to contribute in any way you like, and if you feel comfortable doing so, follow our standard instructions below and learn how to do it.

## How to contribute?

1. Fork this repository;
1. Create your branch from `develop` **(recommended)**;
1. Make your changes on the code;
1. [Commit](#commit) your changes;
1. Push it to your fork repository;
1. Open a PR from your fork to this `develop` branch.

## Commit

To commit, you must:

- Certify if your code is valid to linters;
- Use commit rules in [Gitmoji Commitlint](https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/commitlint-config#readme):
  - Starting with one of these emojis ([Gitmoji](https://gitmoji.dev));

**NOTE 1:** Don't forget to setup your IDE with [_eslint_](https://eslint.org/) and [_prettier_](https://prettier.io/).

## Technologies

- Javascript;
- Typescript;
- Jest;
- Storybook;
- React;
- NextJS;
- Emotion.js.

## Project Structure

- **src/constants** contains all the constants used around the library;
- **src/lib** contains all logic functions to achieve library goal;
- **src/test-utils** contains some helpers functions for testing;
- **examples** contains external usage examples of library;
- **storybook** contains components stories to expose;

## Issue Report

1. Try to reproduce the bug in the main branch: The bug may have already been passed in the latest version, always check before reporting the issue.
1. Check to see if the issue hasn't already been reported: It could be that your issue has already been reported by someone else, make sure it is not on the list.
1. [Open a git issue here on Github](https://github.com/git-marcopitra/stylin.js/issues): Explain what happened, and give as much detail as possible so we can try to reproduce the same situation.

A good bug report shouldn't leave others needing to chase you up for more.

## Commands

### Run tests

```sh
# clear cache and run tests
yarn test

# clear cache and run all test files that contains the <term>
yarn test <term>

# generate the test coverage folder
yarn test:coverage

# generate coverage badges from coverage folder
yarn test:badges
```

### Run Storybook

```sh
# run local storybook
yarn storybook

# make static storybook site
yarn build:storybook
```
