const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const minifycss = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');

// compile sass
gulp.task('sass', function(){
  return gulp.src(['src/scss/*.scss'])
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

// watch & serve
gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: './src'
  });

  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(['src/*html']).on('change', browserSync.reload);
  gulp.watch(['src/js/*js']).on('change', browserSync.reload);
});

// default
gulp.task('default', ['serve']);

// export
// html
gulp.task('copyHTML', function(){
  gulp.src('src/*html')
  .pipe(gulp.dest('dist/'));
});

// css
gulp.task('copyCSS', function(){
  gulp.src('src/css/*')
  .pipe(minifycss())
  .pipe(gulp.dest('dist/css/'));
});

// images
gulp.task('copyImages', function(){
  gulp.src('src/images/*')
  .pipe(gulp.dest('dist/images/'));
});

// js
gulp.task('minifyJS', function(){
  gulp.src(['src/js/main.js', 'src/js/core.js', 'src/js/dropzone.js', 'src/js/dashboard.js'])
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

// html
gulp.task('copyAJAX', function(){
  gulp.src('src/ajax/*')
  .pipe(gulp.dest('dist/ajax/'));
});

// export
gulp.task('export', ['copyHTML', 'copyCSS', 'copyImages', 'minifyJS', 'copyAJAX']);