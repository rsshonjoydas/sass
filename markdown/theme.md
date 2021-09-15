<p align="center">
  <h1 align="center">SCSS for Bigenner's</h1>
  <h3 align="center">--- SASS Theme ---</h3>

### html

```html
<body class="light">
  // code something
</body>
```

### Variable

```scss
$primary-color: #34495e;
$accent-color: #ff652f;
```

### theme mixin

```scss
@mixin theme($light-theme: true) {
  @if $light-theme {
    background: lighten($primary-color, 100%);
    color: darken($text-color, 100%);
  }
}
```

### use theme

```scss
.light {
  @include theme($light-theme: true); // true is light and false is dark theme
}
```
