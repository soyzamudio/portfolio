var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  rename: {
    'gulp-gh-pages': 'ghPages'
  }
});

gulp.task('watch', function() {
  gulp.watch('./client/**/*.html', ['build']);
});

gulp.task('build', function() {
  return gulp.src(['./client/**/*.html', './client/**/*.css'])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe($.ghPages());
});
