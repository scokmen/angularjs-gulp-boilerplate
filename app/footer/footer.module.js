(function () {
    'use strict';

    /** @namespace ng-starter.footer */
    var footer = angular.module('ng-starter.footer',
        [
            'ng-starter.services',
            'ng-starter.vendor'
        ]);

    footer.config(config);

    /**
     * ng-starter.footer config function.
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    /* @ngInject */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('footer');
    }
    
})();
