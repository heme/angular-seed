var gulp = require('gulp');
var config = require('../config');

gulp.task('js', ['clean-js'], function () {
    return gulp.src([config.srcDir + '/' + config.buildFileName + '.js'])
        .pipe(gulp.dest(config.buildDir+'/'));
});

