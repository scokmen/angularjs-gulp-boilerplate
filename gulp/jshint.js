'use strict';

var gulp = require('gulp');
var path = require('path');
var jshint = require('gulp-jshint');
var config = require('./config');

//Run JSHint and send the output to the console.
gulp.task('jshint:console', function () {
    return gulp.src(config.appFiles('js', true))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

//Run JSHint and write the output to a html file.
gulp.task('jshint:html', function () {
    return gulp.src(config.appFiles('js', true))
        .pipe(jshint())
        .pipe(jshint.reporter('gulp-jshint-html-reporter', {
            filename: config.getReport(),
            createMissingFolders: false
        }));
});
