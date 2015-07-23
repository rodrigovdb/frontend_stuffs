'use strict';

var gulp    = require('gulp'),
    sass    = require('gulp-sass');

var paths = {
  jquery            : './node_modules/jquery/dist/jquery.min.js',
  fontawesome_css   :  './node_modules/font-awesome/scss/font-awesome.scss',
  fontawesome_font  : './node_modules/font-awesome/fonts/*',

  sass              : './src/sass/*.scss'
}

gulp.task('styles', function() {
    gulp.src([
          paths.sass,
          paths.fontawesome_css
        ])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('default', function(){
  gulp.watch(paths.sass, ['styles']);
});
