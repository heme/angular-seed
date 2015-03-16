var gulp = require('gulp');
var config = require('../config');


gulp.task('watch', ['watch-index',
                    'watch-html',
                    'watch-css',
                    'watch-js',
                    'watch-templates',
                    'watch-libs']);

gulp.task('watch-index', function(callback) {
  gulp.watch([config.srcDir+'/index.html'], ['index']);
});

gulp.task('watch-html', function(callback) {
  gulp.watch([config.srcDir+'/**/*.html'], ['assets']);
});

gulp.task('watch-css', function(callback) {
  gulp.watch([config.srcDir+'/'+config.buildFileName+'.css'], ['css']);
});

gulp.task('watch-js', function(callback) {
  gulp.watch([config.buildDir + '/' + config.buildFileName + '.js'], ['js']);
});
