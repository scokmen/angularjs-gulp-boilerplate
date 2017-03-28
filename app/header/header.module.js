(function () {
    'use strict';

    /** @namespace ng-starter.header */
    var header = angular.module('ng-starter.header',
        [
            'ng-starter.services',
            'ng-starter.vendor'
        ]);

    header.config(config);

    /**
     * ng-starter.header config function.
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    /* @ngInject */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('header');
    }

})();
