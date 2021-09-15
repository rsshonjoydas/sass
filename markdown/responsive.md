<p align="center">
  <h1 align="center">SCSS for Bigenner's</h1>
  <h3 align="center">--- SASS Responsive Mobile device ---</h3>

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
@mixin mobile {
@media (max-width: 800px) {
  @content;
}
```

### use mixin

```scss
.main {
  // __paragraph1 {some code}
  // __paragraph2 {some code}

  @include mobile{
    flex-direction: column:
  }
}
```
