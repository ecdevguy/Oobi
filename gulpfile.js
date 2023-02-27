const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');
//const babel = require('gulp-babel');
const mode = require('gulp-mode')();

gulp.task('process-sass', () => {
    return gulp.src('Content/scss/site.scss')
        .pipe(mode.development(sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 1%']
        }))
        .pipe(cssnano())
        .pipe(mode.development(sourcemaps.write()))
        .pipe(gulp.dest('Content'));
});

gulp.task('process-js', () => {
    return gulp.src('Scripts/js/*.js')
        .pipe(webpack({
            mode: mode.development() ? 'development' : 'production',
            watch: true,
            output: {
                filename: 'Site.js'
            }
        }))
        //.pipe(babel({ presets: ['@babel/env'] }))
        .pipe(mode.development(sourcemaps.init()))
        .pipe(uglify().on('error', (uglify) => {
            console.error(uglify.message);
            this.emit('end');
        }))
        .pipe(mode.development(sourcemaps.write()))
        .pipe(gulp.dest('Scripts'));
});

gulp.task('default', () => {

    gulp.watch(
        ['Content/scss/*.scss','Content/scss/*/*.scss'],
        { ignoreInitial: false },
        gulp.series('process-sass')
    );

    gulp.watch(
        ['Scripts/js/*.js'],
        { ignoreInitial: false },
        gulp.series('process-js')
    );

});