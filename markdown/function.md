<p align="center">
  <h1 align="center">SCSS for Bigenner's</h1>
  <h3 align="center">--- SASS Function ---</h3>

### html

```html
<div class="main">
  <p class="main_paragraph1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit..
  </p>
</div>
```

### maps

```scss
$font-weights: (
  'regular': 400,
  'medium': 500,
  'bold': 700,
);
```

### function

```scss
@function weight($weight-name) {
  @return map-get($font-weights, $weight-name);
}
```

### use function

```scss
.main {
  width: 80%;
  margin: 0 auto;

  &_paragraph {
    font-weight: weight(regular);
  }
}
```
