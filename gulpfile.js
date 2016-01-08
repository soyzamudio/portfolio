var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  rename: {
    'gulp-gh-pages': 'ghPages'
  }
});

gulp.task('build', function() {
  return gulp.src('./client/**/*.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe($.ghPages());
});
