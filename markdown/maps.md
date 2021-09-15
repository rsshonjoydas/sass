<p align="center">
  <h1 align="center">SCSS for Bigenner's</h1>
  <h3 align="center">--- SASS maps and each ---</h3>

- [maps](#maps)
- [each](#each)

### maps

```scss
$font-weights: (
  'regular': 400,
  'medium': 500,
  'bold': 700,
);
```

### use scss Maps

```scss
body {
  font-weight: map-get($font-weights, bold);
}
```

## each

```html
<p class="red-text">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit..
</p>
<p class="blue-text">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit..
</p>
```

```scss
@each $color in red, green, blue {
  .#{$color}-text {
    color: $color;
  }
}
```

### use list

```scss
$color: (
  colorRed: red,
  colorGreen: green,
  colorBlur: blue,
);

@each $key, $color in $color {
  .#{$color}-text {
    color: $color;
  }
}
```
