'use strict';

var path = require('path');

exports.paths = {
  root: './',
  app: './app/',
  www: './www/',
  view: './index.html'
};

exports.appFiles = function(extension, recursive){
   return path.join(exports.paths.app, (recursive ? '**/*.' : '*.') + extension);
};
