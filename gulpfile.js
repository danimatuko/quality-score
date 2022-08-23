const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function build() {
  return src('sass/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchTask() {
  watch(['sass/**/*.scss', './index.html'], build);
}

exports.default = series(build, watchTask);
