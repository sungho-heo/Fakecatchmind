import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";


// watch assets/scss/모든파일중에서/*.sccs파일만 수정하면 다시 최적화및 css파일 변환작업진행함.
const paths = {
    styles: {
        src: "assets/scss/styles.scss",
        dest: "src/static/styles",
        watch: "assets/scss/**/*.scss",
    },
}

const sass = gulpSass(dartSass);

function styles() {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.styles.dest));
}


function watchFiles() {
    gulp.watch(paths.styles.watch, styles);
}

const dev = gulp.series(gulp.parallel(styles, watchFiles));

export default dev;