(function () {
    'use strict';

    /** @namespace ng-starter.index */
    var index = angular.module('ng-starter.index', [
        'ng-starter.services',
        'ui.router'
    ]);

    index.config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    /**
     * ng-starter.index application config.
     * @param {$stateProvider} $stateProvider
     * @param {$urlRouterProvider} $urlRouterProvider
     */
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('ngstarter.index', {
                abstract: true,
                url: '/index',
                views: {
                    'main': {
                        controller: 'IndexController',
                        templateUrl: '/app/index/index.html',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('ngstarter.index.home', {
                url: '/home',
                views: {
                    'index': {
                        controller: 'HomeController',
                        templateUrl: '/app/index/components/home/home.html',
                        controllerAs: 'vm'
                    }
                }
            });

        $urlRouterProvider.otherwise('/index/home');
    }

})();
