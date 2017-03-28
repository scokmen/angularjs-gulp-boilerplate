'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var path = require('path');
var uglify = require('gulp-uglify');
var stripDebug = require('gulp-strip-debug');
var angularFilesort = require('gulp-angular-filesort');
var templateCache = require('gulp-angular-templatecache');
var ngAnnotate = require('gulp-ng-annotate');
var config = require('./config');

//Inject the application files into the html file.
gulp.task('scripts:dev', function () {

    var injectOptions = {
        name: 'app',
        addSuffix: '?v=' + new Date().getTime()
    };

    var scripts = gulp.src(config.appFiles('js', true)).pipe(angularFilesort());
    return gulp.src(config.getViewPath())
        .pipe(inject(scripts, injectOptions))
        .pipe(gulp.dest(config.getRootPath()));
});

//Bundle the application files.
gulp.task('scripts:prod:bundle:js', function () {
    return gulp.src(config.appFiles('js', true))
        .pipe(angularFilesort())
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest(config.getDistPath()));
});

//Bundle the template files.
gulp.task('scripts:prod:bundle:html', function () {

    var templateCacheOptions = {
        module: 'ng-starter',
        standalone: false,
        filename: 'templates.min.js',
        root: '/app'
    };

    return gulp.src(config.appFiles('html', true))
        .pipe(templateCache(templateCacheOptions))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest(config.getDistPath()));
});

//Inject the js and html bundles into the html file.
gulp.task('scripts:prod', ['scripts:prod:bundle:js', 'scripts:prod:bundle:html'], function () {

    var injectOptions = {
        name: 'app',
        addSuffix: '?v=' + new Date().getTime(),
        ignorePath: '/' + config.getDistPath()
    };

    var injectFiles = [path.join(config.getDistPath(), 'app.min.js'), path.join(config.getDistPath(), 'templates.min.js')];

    return gulp.src(path.join(config.getDistPath(), 'index.html'))
        .pipe(inject(gulp.src(injectFiles), injectOptions))
        .pipe(gulp.dest(config.getDistPath()));
});