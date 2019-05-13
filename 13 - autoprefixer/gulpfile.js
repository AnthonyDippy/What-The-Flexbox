var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

// problems switching from gulp3 to gulp4

// added async to make task run from terminal
// autoprefixer still not working correctly
gulp.task('styles', async function () {
  gulp.src('css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
})

// not working at all
gulp.task('watch', function () {
  gulp.watch('css/styles.css', ['styles']);
})