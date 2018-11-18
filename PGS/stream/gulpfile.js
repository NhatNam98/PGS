const gulp          = require('gulp');
const sass          = require('gulp-sass');
const pug           = require('gulp-pug');
const autoprefixer  = require('autoprefixer');
const postcss       = require('gulp-postcss');
const babel         = require('gulp-babel');
const bootstrap = require('bootstrap-styl');

let postplugins = [autoprefixer];


gulp.task('styles', function(){
    return gulp
           .src('./source/styles/main.scss')
           .pipe(sass())
           .pipe(postcss(postplugins))
           .pipe( gulp.dest('./public/css/'));
});

gulp.task('pug', function(){
    return gulp
           .src('./source/pages/*.pug')
           .pipe(pug({ pretty : true }))
           .pipe( gulp.dest('./public/html/'));
});
gulp.task('js', function(){
    return gulp
           .src('./source/js/*.js')
           .pipe(babel())
           .pipe( gulp.dest('./public/js/'));
});

gulp.task('watch', function(){
    gulp.watch(['./source/styles/main.scss','./source/**/*.scss'],['styles']);
    gulp.watch('./source/**/*.pug',['pug']);
    gulp.watch('./source/js/index.js',['js']);
});

gulp.task('default',['styles','watch','pug','js']);