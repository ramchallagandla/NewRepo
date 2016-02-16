/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var debug = require('gulp-debug');
var config = { src: ['*.js', '!*.min.js', '!gulpfile.js']}

gulp.task('default', ['clean'], function () {
    gulp.src(config.src)
    .pipe(debug())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('bin/'));
});

gulp.task('clean', function () {
    del.sync(['*.min.js']);
});

