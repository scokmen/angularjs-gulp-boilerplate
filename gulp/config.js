'use strict';

var path = require('path');

exports.paths = {
  app: './app/',
  www: './www/'
};

exports.appFiles = function(extension, recursive){
  return path.join(exports.paths.app, (recursive ? '/**/*.' : '/*.') + extension);
};
