(function () {
    'use strict';

    /** @namespace ng-starter.header */
    var header = angular.module('ng-starter.header',
        [
            'ng-starter.services',
            'ng-starter.vendor'
        ]);

    header.config(config);

    config.$inject = ['$translatePartialLoaderProvider'];

    /**
     * ng-starter.header config function.
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('header');
    }

})();
