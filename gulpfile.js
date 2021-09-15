const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildsStyles() {
  return src('*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['*.scss'], buildsStyles)
}

exports.default = series(buildsStyles, watchTask)