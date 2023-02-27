# Stylina

A lightweight library for vanilla, to style builtin element using the prefix key `in-`

## Get Started

You just need to add the cdn (`https://unpkg.com/@stylin.js/stylina@<version>`) to your `script` tag with `type="module"`, make sure that you add the correct version as you want, [see our versions](https://www.npmjs.com/package/@stylin.js@stylina?activeTab=versions).

```html
<html lang="en">
  ...
  <body>
    ...
    <script type="module" src="https://unpkg.com/@stylin.js/stylina@<version>"></script>
  </body>
</html>
```


## Usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stylina</title>
  </head>
  <body>
    <h1 in-color="blue" in-background-color="red">
      hello <strong in-color="green">world</strong>
    </h1>
    <h2 in-color="blue" in-background-color="red">
      hello <small in-color="green">world</small>
    </h2>
    <div in-background="green">green</div>
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
  <script src="https://unpkg.com/stylina<@version>"></script>
</html>
```
