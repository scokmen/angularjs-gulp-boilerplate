'use strict';

var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var config = require('./config');

//Clean the distribution folder.
gulp.task('clean:dev', function () {
    del(config.getDist());
});

//Build application in the development mode.
gulp.task('build:dev', ['clean:dev'], function (cb) {
    runSequence('vendors:dev', 'scripts:dev', 'styles:dev', cb);
});
