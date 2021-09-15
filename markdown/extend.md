<p align="center">
  <h1 align="center">SCSS for Bigenner's</h1>
  <h3 align="center">--- SASS extend and Inheritance ---</h3>

## html

```html
<button type="button" class="download-btn">Download</button>
<button type="button" class="learn-more-btn">Learn More</button>
```

### use extend

```scss
.btn {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.download-btn {
  @extend .btn;
  background-color: #34495e;
}
.learn-more-btn {
  @extend .btn;
  background-color: cyan;
}
```
