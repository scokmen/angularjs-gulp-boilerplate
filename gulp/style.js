'use strict';

var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var inject = require('gulp-inject');
var concatCss = require('gulp-concat-css');
var config = require('./config');

//Compile LESS files and inject to html file.
gulp.task('styles:dev:compile', function () {

    return gulp.src(config.appFiles('less', true))
        .pipe(less())
        .pipe(gulp.dest(config.getDist()));
});

//Inject compiled styles into the html file.
gulp.task('styles:dev', ['styles:dev:compile'], function () {

    var injectOptions = {
        name: 'styles',
        addSuffix: '?v=' + new Date().getTime()
    };

    var styles = gulp.src(path.join(config.getDist(), '/**/*.css'));
    return gulp.src(config.getView())
        .pipe(inject(styles, injectOptions))
        .pipe(gulp.dest(config.getRoot()));
});

//Compile LESS files into the single css file.
gulp.task('styles:prod:compile', function () {

    return gulp.src(config.appFiles('less', true))
        .pipe(less({compress: true}))
        .pipe(concatCss('style.min.css'))
        .pipe(gulp.dest(config.getDist()));
});

//Inject the compiled style.min.css into the html file.
gulp.task('styles:prod', ['styles:prod:compile'], function () {

    var injectOptions = {
        name: 'styles',
        addSuffix: '?v=' + new Date().getTime(),
        ignorePath: '/' + config.getDist()
    };

    return gulp.src(path.join(config.getDist(), 'index.html'))
        .pipe(inject(gulp.src(path.join(config.getDist(), 'style.min.css')), injectOptions))
        .pipe(gulp.dest(config.getRoot()));
});