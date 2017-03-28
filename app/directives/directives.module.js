(function () {
    'use strict';

    /** @namespace ng-starter.directives */
    var directives = angular.module('ng-starter.directives',
        [
            'ng-starter.services',
            'ng-starter.vendor'
        ]);

    directives.config(config);

    /**
     * ng-starter.directives config function.
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    /* @ngInject */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('directives');
    }

})();
