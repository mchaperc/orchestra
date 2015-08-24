(function(){
  /*global -$ */
  'use strict';

  var gulp = require('gulp');
  var less = require('less');
  var $ = require('gulp-load-plugins')();
  var browserSync = require('browser-sync');
  var reload = browserSync.reload;
  var gutil = require('gulp-util');
  var notify = require('gulp-notify');
  var less = require('gulp-less');
  var autoprefix = require('gulp-autoprefixer');
  var minifyCSS = require('gulp-minify-css')

  var lessDir = 'styles';
  var targetCSSDir = 'dist/styles';

  var targetJSDir = 'dist/scripts';

  gulp.task('styles', function () {
      return gulp.src(lessDir + '/*.less')
          .pipe(less({ style: 'compressed' }).on('error', gutil.log))
          //.pipe(autoprefix('last 10 version'))
          .pipe($.concat('main.css'))
          .pipe($.sourcemaps.write('.'))
          .pipe(gulp.dest(targetCSSDir))
          .pipe(notify('CSS minified'))
          .pipe(reload({stream: true}));
  });

  gulp.task('scripts', function () {
    return gulp.src('scripts/**/*.js')
      .pipe($.sourcemaps.init())
      .pipe($.plumber())
      .pipe($.concat('main.js'))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest('dist/scripts/'))
      .pipe(notify('JS minified'))
      .pipe(reload({stream: true}));
  });

  gulp.task('templates', function(){
    gulp.src('templates/**/*.hbs')
      .pipe($.plumber())
      .pipe($.handlebars())
      .pipe($.wrap('Handlebars.template(<%= contents %>)'))
      .pipe($.declare({
        namespace: 'JST',
        noRedeclare: true, // Avoid duplicate declarations
      }))
      .pipe($.concat('templates.js'))
      .pipe(notify('Templates minified'))
      .pipe(gulp.dest('dist/scripts/'))
      .pipe(reload({stream: true}));
  });

  gulp.task('build', ['scripts', 'templates', 'styles'], function(){});

  gulp.task('serve', ['build'], function () {
    browserSync({
      notify: false,
      port: 9000,
      server: {
        baseDir: ['./']
      }
    });

    // watch for changes
    gulp.watch([
      '*.html',
      'scripts/**/*.js',
      'styles/*.less'
    ]).on('change', reload);

    gulp.watch('styles/*.less', ['styles']);
    gulp.watch('templates/**/*.hbs', ['templates']);
    gulp.watch('scripts/**/*.js', ['scripts']);
  });

  gulp.task('default', ['serve'], function (){});
})();
