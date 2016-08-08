'use strict';

var gulp = require('gulp');
var del = require('del');
var jsdoc = require('gulp-jsdoc');
var config = require('./config');

//Clean the documentation folder.
gulp.task('clean:doc', function () {
    del.sync(config.getDoc(), {dryRun: true});
});

//Create a js-doc documentation.
gulp.task('documentation', ['clean:doc'], function () {
    return gulp.src(config.appFiles('js', true))
        .pipe(jsdoc(config.getDoc()));
});