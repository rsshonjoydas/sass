<p align="center">
  <h1 align="center">SCSS for Bigenner's</h1>
  <h3 align="center">--- SASS Variable ---</h3>

## Declare Css variable

```css
:root {
  --primary-color: #34495e;
  --accent-color: #ff652f;
  --text-color: #fff;
}
```

### use css variable

```css
body {
  background: var(--primary-color);
}
```

## Declare Sass variable

```scss
$primary-color: #34495e;
$accent-color: #ff652f;
$text-color: #fff;
```

### use sass variable

```scss
body {
  background: $primary-color;
}
```
