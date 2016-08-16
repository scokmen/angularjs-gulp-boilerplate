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

    return gulp.src(config.getView())
        .pipe(inject(gulp.src(bowerFiles.ext('js').files), injectOptions))
        .pipe(gulp.dest(config.getRoot()));
});

//Minify the bower files.
gulp.task('vendors:prod:minify', function () {

    return gulp.src(bowerFiles.ext('js').files)
        .pipe(uglify())
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest(config.getDist()));
});

//Inject vendors.js into the html.
gulp.task('vendors:prod', ['vendors:prod:minify'], function () {

    var injectOptions = {
        name: 'vendors',
        addSuffix: '?v=' + new Date().getTime(),
        ignorePath: '/' + config.getDist()
    };

    return gulp.src(path.join(config.getDist(), 'index.html'))
        .pipe(inject(gulp.src(path.join(config.getDist(), 'vendors.min.js')), injectOptions))
        .pipe(gulp.dest(config.getDist()));
});
