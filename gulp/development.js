'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

//Build in the development mode.
gulp.task('build:dev',  function (cb) {

  runSequence('clean', 'vendors:dev', 'scripts:dev', cb);
});
