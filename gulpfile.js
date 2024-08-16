const gulp = require('gulp');
const path = require('path');

function logPaths(cb) {
  console.log('Current working directory:', process.cwd());
  console.log('Full path to style.css:', path.resolve('./style.css'));
  console.log('Full path to images folder:', path.resolve('./images'));
  cb();
}

function templates() {
  console.log('Starting templates task');
  return gulp.src('./hbs/**/*.hbs', { allowEmpty: true })
    .pipe(gulp.dest('dist/'))
    .on('end', () => console.log('Templates task completed'));
}

function copy() {
  console.log('Starting copy task');
  return gulp.src(['./style.css', './images/**/*'], { base: '.', allowEmpty: true })
    .pipe(gulp.dest('dist/'))
    .on('end', () => console.log('Copy task completed'));
}

exports.logPaths = logPaths;
exports.templates = templates;
exports.copy = copy;
exports.default = gulp.series(logPaths, templates, copy);