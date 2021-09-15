<p align="center">
  <h1 align="center">SCSS for Bigenner's</h1>
  <h3 align="center">--- SASS Nesting ---</h3>

### html

```html
<div class="main">
  <p class="main_paragraph1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit..
  </p>
</div>
```

### scss variable and maps

```scss
$primary-color: #34495e;
$accent-color: #ff652f;
$text-color: #fff;
$font-weights: (
  'regular': 400,
  'medium': 500,
  'bold': 700,
);
```

### CSS Nesting

```css
.main {
  width: 80%;
  margin: 0 auto;
}
.main p {
  font-weight: map-get($font-weights, bold);
}
```

### SASS Nesting first method

```scss
.main {
  width: 80%;
  margin: 0 auto;

  p {
    font-weight: map-get($font-weights, bold);
  }
}
```

### SASS Nesting second method

```scss
.main {
  width: 80%;
  margin: 0 auto;

  .main_paragraph {
    font-weight: map-get($font-weights, bold);
  }
}
```

### SASS Nesting third method

```scss
.main {
  width: 80%;
  margin: 0 auto;

  &_paragraph {
    font-weight: map-get($font-weights, bold);
    color: $accent-color;
  }
}
```
