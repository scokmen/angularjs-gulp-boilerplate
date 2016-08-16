'use strict';

var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var config = require('./config');

//Clean the distribution folder.
gulp.task('clean:prod', function () {
    del(config.getDist());
});

//Copy html to distibution folder.
gulp.task('html:prod', function () {
    return gulp.src(config.getView())
        .pipe(gulp.dest(config.getDist()));
});

//Build application in the production mode.
gulp.task('build:prod', ['clean:prod'], function (cb) {
    runSequence('html:prod', 'vendors:prod', 'scripts:prod', cb);
});
