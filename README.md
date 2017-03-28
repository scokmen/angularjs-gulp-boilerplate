# angularjs-gulp-boilerplate
A simple starter angularjs (1.5.x) app with common services and gulp tasks on john papa's style guide.

[![GitHub version](https://badge.fury.io/gh/scokmen%2Fangularjs-gulp-boilerplate.svg)](https://badge.fury.io/gh/scokmen%2Fangularjs-gulp-boilerplate)
[![npm version](https://badge.fury.io/js/angularjs-gulp-boilerplate.svg)](http://badge.fury.io/js/angularjs-gulp-boilerplate)
[![Bower version](https://badge.fury.io/bo/angularjs-gulp-boilerplate.svg)](http://badge.fury.io/bo/angularjs-gulp-boilerplate)
[![Build Status](https://travis-ci.org/scokmen/angularjs-gulp-boilerplate.svg?branch=master)](https://travis-ci.org/scokmen/angularjs-gulp-boilerplate)

[![NPM](https://nodei.co/npm/angularjs-gulp-boilerplate.png)](https://nodei.co/npm/angularjs-gulp-boilerplate/)

### Features
- Well documented code
- Folder by feature structure
- Module based styling with LESS
- Module based localization (English and Turkish)
- Some useful services (`exceptionService`, `loggerService`, `httpService`)
- Development build
- Optimized production build
- [JsDoc](http://usejsdoc.org/) documentation
- [BrowserSync](https://www.browsersync.io/) integration
- [JsHint](http://jshint.com/) integration
- Simple dummy bootstrap template included

### Download via Npm
```sh
$ npm install angularjs-gulp-boilerplate
```
### Download via Bower
```sh
$ bower install angularjs-gulp-boilerplate
```

### Development build
```sh
$ gulp build:dev (or "npm run development")
$ gulp server:dev
```

### Production build
```sh
$ gulp build:prod (or "npm run production")
$ gulp server:prod
```

### JsDoc documentation
```sh
$ gulp documentation (or "npm run documentation")
```

### JsHint report
Console output
```sh
$ gulp jshint:console
```
Html file output
```sh
$ gulp jshint:html
```