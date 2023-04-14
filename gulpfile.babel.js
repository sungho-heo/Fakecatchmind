import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";




const paths = {
    styles: {
        src: "assets/scss/styles.scss",
        dest: "src/static/styles",
    },
}

const sass = gulpSass(dartSass);

export function styles() {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .pipe(gulp.dest(paths.styles.dest));
}
