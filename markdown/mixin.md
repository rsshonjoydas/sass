<p align="center">
  <h1 align="center">SCSS for Bigenner's</h1>
  <h3 align="center">--- SASS mixin ---</h3>

### html

```html
<div class="main">
  <p class="main_paragraph1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit..
  </p>
  <p class="main_paragraph2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit..
  </p>
</div>
```

### create mixin

```scss
@mixin flexCenter($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
```

### use mixin

```scss
.main {
  @include flexCenter(row);
  width: 80% - 40%;
  margin: 0 auto;
  #{&}_paragraph1 {
    font-weight: map-get($font-weights, bold);
    &:hover {
      color: pink;
    }
  }
  #{&}_paragraph2 {
    @extend .main_paragraph1;
    &:hover {
      color: $accent-color;
    }
  }
}
```

## mixin with parameter

### html

```html
<div class="main">
  <p class="main_paragraph">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit..
  </p>
</div>
```

### create mixin

```scss
@mixin para-style($size, $align) {
  font-size: $size;
  text-align: $align;
}
```

### use mixin

```scss
.main {
  &__paragraph {
    @include para-style(28px, center);
  }
}
```
