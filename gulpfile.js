'use strict';

var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    gutil   = require('gulp-util'),
    coffee  = require('gulp-coffee');

var paths = {
  jquery            : './node_modules/jquery/dist/jquery.min.js',
  fontawesome_css   :  './node_modules/font-awesome/scss/font-awesome.scss',
  fontawesome_font  : './node_modules/font-awesome/fonts/*',

  sass              : './src/sass/*.scss',
  coffee            : './src/coffee/*.coffee'
}

gulp.task('sass', function() {
    gulp.src([
          paths.sass,
          paths.fontawesome_css
        ])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('coffee', function() {
  gulp.src('./src/coffee/*.coffee')
      .pipe(coffee({bare: true}).on('error', gutil.log))
      .pipe(gulp.dest('./src/js/'))
});

gulp.task('compile', ['sass', 'coffee']);

gulp.task('default', function(){
  gulp.watch(paths.sass,    ['sass']);
  gulp.watch(paths.coffee,  ['coffee']);
});
