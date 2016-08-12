(function () {
    'use strict';

    /** @namespace ng-starter.main */
    var main = angular.module('ng-starter.main',
        [
            'ng-starter.services',
            'ng-starter.vendor'
        ]);

    main.config(config);

    config.$inject = ['$translatePartialLoaderProvider'];

    /**
     * ng-starter.main config function.
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('main');
    }

})();
