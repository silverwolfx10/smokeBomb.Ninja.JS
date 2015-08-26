var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('ninja-smoke-bomb', function () {

  return gulp.src('./script.txt')
             .pipe(inject(gulp.src(['./ninja.min.js']), {
                starttag: "javascript:(function () {",
                endtag: "}).call({})",
                transform: function (filePath, file) {
                  return file.contents.toString('utf8');
                }
             }))
             .pipe(gulp.dest('./dest'));
  
});