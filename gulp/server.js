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
            baseDir: [config.getRootPath()],
            routes: { }
        }
    });
});

//Start browserSync server in production mode.
gulp.task('server:prod', function () {

    browserSync.instance = browserSync.init({
        startPath: '/',
        browser: 'default',
        server: {
            baseDir: [config.getDistPath()],
            routes: {}
        }
    });
});