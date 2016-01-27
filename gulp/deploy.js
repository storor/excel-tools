'use strict'

var conf = require('./conf');
var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

gulp.task('deploy-gh', ['build'], () => {
  var ghPages =  $.ghPages;
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
