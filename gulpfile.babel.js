import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import bro from "gulp-bro";
import babelify from "babelify";
import uglifyify from "uglifyify";
import { rimraf } from "rimraf";

// watch assets/scss/모든파일중에서/*.sccs파일만 수정하면 다시 최적화및 css파일 변환작업진행함.
const paths = {
    styles: {
        src: "assets/scss/styles.scss",
        dest: "src/static/styles",
        watch: "assets/scss/**/*.scss",
    },
    js: {
        src: "assets/js/main.js",
        dest: "src/static/js",
        watch: "assets/js/**/*.js",
    },
};


const sass = gulpSass(dartSass);


const clean = () => rimraf("src/static");


const styles = () => gulp.src(paths.styles.src).pipe(sass()).pipe(autoprefixer()).pipe(csso()).pipe(gulp.dest(paths.styles.dest));

const js = () =>
    gulp
        .src(paths.js.src)
        .pipe(bro({
            transform: [
                babelify.configure({ presets: ["@babel/preset-env"] }),
                ["uglifyify",{global:true}]
            ]
        }))
        .pipe(gulp.dest(paths.js.dest));

const watchFiles = () => {
    gulp.watch(paths.styles.watch, styles);
    gulp.watch(paths.js.watch, js);
};


const dev = gulp.series(clean, gulp.parallel(styles, js, watchFiles));

export default dev;