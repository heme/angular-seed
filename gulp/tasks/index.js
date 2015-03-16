var gulp = require('gulp');
var config = require('../config');
var assets = require("gulp-assets");


gulp.task('index', ['clean-index','clean-ext-libs'], function () {
  return gulp.src([config.srcDir+'/index.html'])
      .pipe(assets({
          js: true,
          css: true
      }))
      .pipe(gulp.dest(config.buildDir+'/'));
});