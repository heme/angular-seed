var gulp = require('gulp');
var config = require('../config');
var del = require('del');


// wipe entire build/app/* dir
gulp.task('clean', function (callback) {
  del([config.buildDir+'/*'], callback);
});

// index
gulp.task('clean-index', function (callback) {
    del([config.buildDir+'/index.html'], callback);
});

// ext-libs - any external libraries included in index
gulp.task('clean-ext-libs', function (callback) {
    del([
        config.buildDir+'/jspm_packages/**',
        config.buildDir+'/jspm_packages'
    ], callback);
});

// html
gulp.task('clean-html', function (callback) {
    del([
        config.buildDir+'/**/*.html'
    ], callback);
});

// css
gulp.task('clean-css', function (callback) {
    del([
        config.buildDir+'/'+config.buildFileName+'.css'
    ], callback);
});

// js
gulp.task('clean-js', function (callback) {
  del([
    config.buildDir+'/'+config.buildFileName+'.js',
    config.buildDir+'/'+config.buildFileName+'.min.js'
  ], callback);
});

