'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var path = require('path');
var bowerFiles = require('bower-files')();
var config = require('./config');

//Inject the bower files into the html.
gulp.task('vendors:dev', function () {

    var injectOptions = {
        name: 'vendors',
        addSuffix: '?v=' + new Date().getTime()
    };

    return gulp.src(config.getViewPath())
        .pipe(inject(gulp.src(bowerFiles.ext('js').files), injectOptions))
        .pipe(gulp.dest(config.getRootPath()));
});

//Bundle the bower files.
gulp.task('vendors:prod:bundle', function () {

    return gulp.src(bowerFiles.ext('js').files)
        .pipe(uglify())
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest(config.getDistPath()));
});

//Inject the bundled js file into the html.
gulp.task('vendors:prod', ['vendors:prod:bundle'], function () {

    var injectOptions = {
        name: 'vendors',
        addSuffix: '?v=' + new Date().getTime(),
        ignorePath: '/' + config.getDistPath()
    };

    return gulp.src(path.join(config.getDistPath(), 'index.html'))
        .pipe(inject(gulp.src(path.join(config.getDistPath(), 'vendors.min.js')), injectOptions))
        .pipe(gulp.dest(config.getDistPath()));
});
