<p align="center">
  <h1 align="center">SCSS for Bigenner's</h1>
  <h3 align="center">--- SASS Syntax ---</h3>

```scss
@mixin button-base() {
  @include typography(button);

  display: inline-flex;
  position: relative;
  height: $button-height;
  border: none;
  vertical-align: middle;

  &:hover {
    color: #34495e;
    cursor: pointer;
  }
}
```

## Indented Syntax

```scss
@mixin button-base()
  @include typography(button)

  display: inline-flex;
  position: relative;
  height: $button-height;
  border: none;
  vertical-align: middle;

  &:hover
    color: #34495e;
    cursor: pointer;
```
