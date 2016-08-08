'use strict';

var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var config = require('./config');

//Clean the distribution folder.
gulp.task('clean:dev', function () {
    del.sync(config.getDist(), {dryRun: true});
});

//Build application in the development mode.
gulp.task('build:dev', function (cb) {
    runSequence('clean:dev', 'vendors:dev', 'scripts:dev', cb);
});
