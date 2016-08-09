'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('./config');

//Start browserSync server in development mode.
gulp.task('server:dev', function () {

    browserSync.instance = browserSync.init({
        startPath: '/',
        browser: 'default',
        server: {
            baseDir: [config.getRoot()],
            routes: { }
        }
    });
});