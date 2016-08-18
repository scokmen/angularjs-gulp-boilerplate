'use strict';

var gulp = require('gulp');
var del = require('del');
var jsdoc = require('gulp-jsdoc');
var config = require('./config');

//Clean the documentation folder.
gulp.task('clean:doc', function () {
    del.sync(config.getDocPath(), {dryRun: true});
});

//Create a JSDOC documentation.
gulp.task('documentation', ['clean:doc'], function () {
    return gulp.src(config.appFiles('js', true))
        .pipe(jsdoc(config.getDocPath()));
});