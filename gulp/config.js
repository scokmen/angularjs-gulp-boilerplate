'use strict';

var path = require('path');

//Special folders and paths.
var paths = {
    root: './',
    app: './app/',
    www: './www/',
    doc: './doc',
    report: './report/jshint.html',
    view: './index.html'
};

/**
 * Get file list under the app folder by extension
 * @param {string} extension - file extension.
 * @param {boolean} recursive - is search recursive?
 * @return {string}
 */
exports.appFiles = function (extension, recursive) {
    return path.join(paths.app, (recursive ? '**/*.' : '*.') + extension);
};

/**
 * Get the root folder.
 * @returns {string}
 */
exports.getRootPath = function () {
    return path.join(paths.root);
};

/**
 * Get the application folder.
 * @returns {string}
 */
exports.getAppPath = function () {
    return path.join(paths.app);
};

/**
 * Get the distribution folder.
 * @returns {string}
 */
exports.getDistPath = function () {
    return path.join(paths.www);
};

/**
 * Get the documentation folder.
 * @returns {string}
 */
exports.getDocPath = function () {
    return path.join(paths.doc);
};

/**
 * Get the report file.
 * @returns {string}
 */
exports.getReportPath = function () {
    return path.join(paths.report);
};

/**
 * Get the main view.
 * @return {string}
 */
exports.getViewPath = function () {
    return path.join(paths.view);
};