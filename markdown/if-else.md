<p align="center">
  <h1 align="center">SCSS for Bigenner's</h1>
  <h3 align="center">--- SASS @if, @else if, @else ---</h3>

### html

```html
<div class="main">
  <p class="main_paragraph">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit..
  </p>
</div>
```

### create if else

```scss
@mixin setFontSize($value) {
  @if $value == small {
    font-size: 12px;
  } @else if $value == medium {
    font-size: 16px;
  } @else if $value == large {
    font-size: 20px;
  } @else {
    font-size: none;
  }
}
```

### use if else

```scss
.main {
  &__paragraph {
    @include setFontSize(medium);
  }
}
```
