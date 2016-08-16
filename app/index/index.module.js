(function () {
    'use strict';

    /** @namespace ng-starter.index */
    var index = angular.module('ng-starter.index', [
        'ng-starter.services',
        'ng-starter.vendor'
    ]);

    index.config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$translatePartialLoaderProvider'];

    /**
     * ng-starter.index config function.
     * @param {$stateProvider} $stateProvider
     * @param {$urlRouterProvider} $urlRouterProvider
     * @param {$translatePartialLoaderProvider} $translatePartialLoaderProvider
     */
    function config($stateProvider, $urlRouterProvider, $translatePartialLoaderProvider) {
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
            })
            .state('ngstarter.index.contact', {
                url: '/home',
                views: {
                    'index': {
                        controller: 'ContactController',
                        templateUrl: '/app/index/components/contact/contact.html',
                        controllerAs: 'vm'
                    }
                }
            });

        //Default url.
        $urlRouterProvider.otherwise('/index/home');

        $translatePartialLoaderProvider.addPart('index');
    }

})();
