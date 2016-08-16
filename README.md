# angularjs-gulp-boilerplate
A simple starter angularjs (1.5.x) app with common services and gulp tasks on john papa's style guide.

### Features
- Well documented code
- Folder by feature structure
- Module based styling with LESS
- Module based localization
- [Jasmine](http://jasmine.github.io/) & [Karma](https://karma-runner.github.io/1.0/index.html) tests.
- Some useful services (`exceptionService`, `loggerService`, `httpService`)
- Development build
- Optimized production build
- [JsDoc](http://usejsdoc.org/) documentation
- [BrowserSync](https://www.browsersync.io/) integration
- [JsHint](http://jshint.com/) integration

### Development build
```sh
$ gulp build:dev (or "npm run development")
$ gulp server:dev
```

### Production build
```sh
$ gulp build:prod (or "npm run production")
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