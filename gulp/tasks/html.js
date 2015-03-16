var gulp = require('gulp');
var config = require('../config');


gulp.task('html', ['clean-html'], function () {
  return gulp.src([
          config.srcDir+'/**/*.html',
          '!'+config.srcDir+'/jspm_packages/**'
      ])
      .pipe(gulp.dest(config.buildDir+'/'));
});