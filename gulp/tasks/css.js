var gulp = require('gulp');
var config = require('../config');


gulp.task('css', ['clean-css'], function () {
    return gulp.src([config.srcDir+'/'+config.buildFileName+'.css'])
        .pipe(gulp.dest(config.buildDir+'/'));
});