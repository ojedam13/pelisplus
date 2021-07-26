const gulp = require('gulp');
var sass = require('gulp-sass') (require('sass'));
var autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('./build/css'))
}

// Tareas

gulp.task('css', css);