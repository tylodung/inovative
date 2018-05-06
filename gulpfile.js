const gulp = require('gulp');
const imageoptim = require('gulp-imageoptim');

gulp.task('images', () => {
  return gulp.src('./pages/img/**/*.{jpg,png,svg,gif}', {base: './pages/img'})
    .pipe(imageoptim.optimize())
    .pipe(gulp.dest('./pages/img'))
});

