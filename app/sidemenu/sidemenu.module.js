(function () {
    'use strict';

    /** @namespace ng-starter.sidemenu */
    var sidemenu = angular.module('ng-starter.sidemenu',
        [
            'ng-starter.services',
            'ng-starter.vendor'
        ]);

    sidemenu.config(config);

    /**
     * ng-starter.sidemenu config function.
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    /* @ngInject */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('sidemenu');
    }

})();
