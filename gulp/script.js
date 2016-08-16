'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var path = require('path');
var uglify = require('gulp-uglify');
var angularFilesort = require('gulp-angular-filesort');
var templateCache = require('gulp-angular-templatecache');
var config = require('./config');

//Inject the app files into the html.
gulp.task('scripts:dev', function () {

    var injectOptions = {
        name: 'app',
        addSuffix: '?v=' + new Date().getTime()
    };

    var scripts = gulp.src(config.appFiles('js', true)).pipe(angularFilesort());
    return gulp.src(config.getView())
        .pipe(inject(scripts, injectOptions))
        .pipe(gulp.dest(config.getRoot()));
});

//Minify the app files.
gulp.task('scripts:prod:minify', function () {
    return gulp.src(config.appFiles('js', true))
        .pipe(angularFilesort())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.getDist()));
});

//Angular templatecache.
gulp.task('templatecache:prod', function () {

    var templateCacheOptions = {
        module: 'ngstarter.templates',
        standalone: true,
        filename: 'templates.min.js',
        root: '/app'
    };

    return gulp.src(config.appFiles('html', true))
        .pipe(templateCache(templateCacheOptions))
        .pipe(uglify())
        .pipe(gulp.dest(config.getDist()));
});

//Inject the minified app fle into the html.
gulp.task('scripts:prod', ['scripts:prod:minify', 'templatecache:prod'], function () {

    var injectOptions = {
        name: 'app',
        addSuffix: '?v=' + new Date().getTime(),
        ignorePath: '/' + config.getDist()
    };

    var injectFiles = [path.join(config.getDist(), 'app.min.js'), path.join(config.getDist(), 'templates.min.js')];

    return gulp.src(path.join(config.getDist(), 'index.html'))
        .pipe(inject(gulp.src(injectFiles), injectOptions))
        .pipe(gulp.dest(config.getDist()));
});