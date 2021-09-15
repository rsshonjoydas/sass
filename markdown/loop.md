<p align="center">
  <h1 align="center">SCSS for Bigenner's</h1>
  <h3 align="center">--- SASS loop ---</h3>

- [use css grid](#use-css-grid)
- [use sass loop](#use-sass-loop)

### common html

```html
<div class="row">
  <div class="col-3">...</div>
  <!-- 25% -->
  <div class="col-9">...</div>
  <!-- 75% -->
</div>
```

### common CSS

```css
.row::after {
  content: '';
  clear: both;
  display: table;
}

[class*='col-'] {
  float: left;
  padding: 15px;
  border: 1px solid red;
}
```

## Use Css Grid

- However, we want to use a responsive grid-view with 12 columns, to have more control over the web page.

- First we must calculate the percentage for one column: 100% / 12 columns = 8.33%.

- Then we make one class for each of the 12 columns, class="col-" and a number defining how many columns the section should span:

```css
.col-1 {
  width: 8.33%;
}
.col-2 {
  width: 16.66%;
}
.col-3 {
  width: 25%;
}
.col-4 {
  width: 33.33%;
}
.col-5 {
  width: 41.66%;
}
.col-6 {
  width: 50%;
}
.col-7 {
  width: 58.33%;
}
.col-8 {
  width: 66.66%;
}
.col-9 {
  width: 75%;
}
.col-10 {
  width: 83.33%;
}
.col-11 {
  width: 91.66%;
}
.col-12 {
  width: 100%;
}
```

## use sass loop

### for loop

```scss
@for $i from 1 through 12 {
  .col-#{$i} {
    width: 100% / 12 * $i;
  }
}
```

### while loop

```scss
$i: 1;

@while $i < 13 {
  .col-#{$i} {
    width: 100% / 12 * $i;
  }
  $i: $i + 1;
}
```
