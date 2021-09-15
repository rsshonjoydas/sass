<p align="center">
  <h1 align="center">SCSS for Bigenner's</h1>
  <h3 align="center">--- SASS Partial ---</h3>

### A Partial is a Sass file named with a leading underscore. You might name it something like \_partial.scss . The underscore lets Sass know that the file is only meant to be loaded as modules, compiler ignore this file.

### create partial file like \_partial.scss

```scss
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

$primary-color: #34495e;
$accent-color: #ff652f;
$text-color: #fff;
```

### import file in main.scss file

```scss
@import './resets'; // Partial file

body {
  background: $primary-color;
  color: $text-color;
}
```
