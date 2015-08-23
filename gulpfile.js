var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
    allStylesheets: ['css/*.scss'],
    stylesheets: ['css/style.scss']
};

gulp.task('sass', function () {
    gulp.src(paths.stylesheets)
    .pipe(sass({ "outputStyle": "compressed", "precision": 9, "sourceComments": false }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch(paths.allStylesheets, ['sass']);
});

gulp.task('default', ['sass']);
