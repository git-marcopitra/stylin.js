# Stylin.js

![Stylin Logo](./public/logo.png)

Stylin.js is an style ecosystem to provide the most easy and productive way to style your elements and components in the most of frontend technologies, providing a full "no-tab-change" styling experience.

## Introduction

- [Stylina `@stylin.js/stylina`](packages/stylina): Stylin.js for Vanilla - directly to your html element.
- [STYLIN.JS for React `@stylin.js/react`](packages/react): Stylin.js for React - allows you to create stylin components.
- [STYLIN.JS core `@stylin.js/core`](packages/core): Stylin.js core - modular functions and logics.

## Stylina

### Installing: @stylin.js/stylina

You just need to add the cdn (`https://unpkg.com/@stylin.js/stylina@<version>`) to your `script` tag with `type="module"`

### Usage: @stylin.js/stylina

```html
<!DOCTYPE html>
<html lang="en">
  ...
  <body in-margin="0" in-padding="0" in-overflow-x="hidden">
    <h1 in-color="blue" in-background-color="red">
      hello <strong in-color="green">world</strong>
    </h1>
  </body>
  <script
    type="module"
    src="https://unpkg.com/@stylin.js/stylina@<version>"
  ></script>
</html>
```

[See more here](/packages/stylina)

## STYLIN.JS for React

### Installing: @stylin.js/react

To install the package you must have installed [node](https://nodejs.org/en/) and npm/yarn

```sh
# npm
npm install @stylin.js/react

# yarn
yarn add @stylin.js/react
```

### Usage: @stylin.js/react

It's too simple to use React _StylinComponents_, see what I mean:

```jsx
import stylin from '@stylin.js/react';
import React from 'react';

const StylinDiv = stylin('div')();

const Home = () => (
  <StylinDiv
    // all your JSX Styles here
    padding="2rem"
    background="#f55"
    borderRadius="1rem"
    on-hover={{
      textAlign: 'right',
    }}
  >
    Hello World
  </StylinDiv>
);
```

[See more here](/packages/react)

## Contributing

To contribute check the [CONTRIBUTING.md](/CONTRIBUTING.md).
