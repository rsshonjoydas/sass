const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildsStyles() {
  return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'))
}

function watchTask() {
  watch(['sass/**/*.scss', '*.html'], buildsStyles)
}

exports.default = series(buildsStyles, watchTask)