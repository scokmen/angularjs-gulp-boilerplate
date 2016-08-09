(function () {
    'use strict';

    /** @namespace ng-starter.home */
    var home = angular.module('ng-starter.home', [
        'ng-starter.services',
        'ui.router'
    ]);

    home.config(config);

    config.$inject = ['$stateProvider'];

    /**
     * ng-starter.home application config.
     * @param {$stateProvider} $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('ngstarter.home', {
                abstract: true,
                url: '/home',
                views: {
                    'main': {
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('ngstarter.home.index', {
                url: '/index',
                views: {
                    'main': {
                        controller: 'IndexController',
                        templateUrl: '/app/home/components/index/index.html',
                        controllerAs: 'vm'
                    }
                }
            });
    }

})();
