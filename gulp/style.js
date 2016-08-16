'use strict';

var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var inject = require('gulp-inject');
var config = require('./config');

//Compile LESS files and inject to html file.
gulp.task('styles:dev:compile', function () {

    return gulp.src(config.appFiles('less', true))
        .pipe(less())
        .pipe(gulp.dest(config.getDist()));
});

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