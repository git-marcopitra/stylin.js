# Stylina

![Stylin Logo](../../public/logo.png)

A **stylin.js** lightweight library for vanilla, to style builtin element using the prefix key `in-`

## Get Started

You just need to add the cdn (`https://unpkg.com/@stylin.js/stylina@<version>`) to your `script` tag with `type="module"`, make sure that you add the correct version as you want, [see our versions](https://www.npmjs.com/package/@stylin.js@stylina?activeTab=versions).

```html
<html lang="en">
  ...
  <body>
    ...
  </body>
  <script
    type="module"
    src="https://unpkg.com/@stylin.js/stylina@<version>"
  ></script>
</html>
```

## Usage

### CSS in-element

You must use CSS Properties as HTML attributes by passing the prefix `in-` as mention above. See the following code:

```html
<!DOCTYPE html>
<html lang="en">
  ...
  <body>
    <h1 in-color="blue" in-background-color="red">
      hello <strong in-color="green">world</strong>
    </h1>
    <h2 in-color="blue" in-background-color="red">
      hi <small in-color="green">everyone</small>
    </h2>
  </body>
  <script
    type="module"
    src="https://unpkg.com/@stylin.js/stylina@<version>"
  ></script>
</html>
```

### Define class

You can group defined style in a class and name him as you which, using the attribute `in-def-class`, see the following example:

```html
<!DOCTYPE html>
<html lang="en">
  ...
  <body>
    <h1 in-color="blue" in-background-color="red" in-def-class="my-heading">
      hello <strong in-color="green" in-def-class="my-emphasis">world</strong>
    </h1>
    <h2 in-color="blue" in-background-color="red">
      hi <small in-color="green">everyone</small>
    </h2>
  </body>
  <script
    type="module"
    src="https://unpkg.com/@stylin.js/stylina@<version>"
  ></script>
</html>
```

### Use defined classes

For sure, you can reuse your pre-defined style, see the example:

```html
<!DOCTYPE html>
<html lang="en">
  ...
  <body>
    <h1 in-color="blue" in-background-color="red" in-def-class="my-heading">
      hello <strong in-color="green" in-def-class="my-emphasis">world</strong>
    </h1>
    <h2 in-use-class="my-heading">
      hi <small in-use-class="my-emphasis">everyone</small>
    </h2>
  </body>
  <script
    type="module"
    src="https://unpkg.com/@stylin.js/stylina@<version>"
  ></script>
</html>
```

### Combined Styles and overwrite

You can combine the `in-def-class` and `in-use-class`, to subscribe your styles, following example:

```html
<!DOCTYPE html>
<html lang="en">
  ...
  <body>
    <div
      in-use-class="circle"
      in-background="green"
      in-def-class="green-circle"
    >
      green
    </div>
    <div
      in-def-class="circle"
      in-width="4rem"
      in-margin="1rem"
      in-height="4rem"
      in-color="white"
      in-display="flex"
      in-background="red"
      in-font-weight="bold"
      in-border-radius="50%"
      in-align-items="center"
      in-justify-content="center"
    >
      red
    </div>
    <div in-use-class="circle,green-circle">green</div>
  </body>
  <script
    type="module"
    src="https://unpkg.com/@stylin.js/stylina@<version>"
  ></script>
</html>
```

#### Explanation

1. On above example, in the 1st element we have `in-use-class="circle"` to declare that we will use this className;
1. and then we have a style `in-background="green"`;
1. following by `in-def-class="green-circle"` to declare that we are overwriting in class `.circle` a new style (`background: green`), in a combined class `.green-circle.circle`;
1. In the 2nd element, we are name all the styles as `.circle`, using the attribute `in-def-class="circle"`;
1. In the last element with `in-use-class="circle,green-circle"` we are use both of declared classes, `circle`
(to use circle styles) and `green-circle` (to overwrite the circle background color).
