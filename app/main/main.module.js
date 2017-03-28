(function () {
    'use strict';

    /** @namespace ng-starter.main */
    var main = angular.module('ng-starter.main',
        [
            'ng-starter.services',
            'ng-starter.vendor'
        ]);

    main.config(config);

    /**
     * ng-starter.main config function.
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    /* @ngInject */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('main');
    }

})();
