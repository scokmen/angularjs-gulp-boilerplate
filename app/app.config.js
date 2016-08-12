(function () {
    'use strict';

    /** @namespace ng-starter */
    var ngStarter = angular.module('ng-starter', [
        'ng-starter.services',
        'ng-starter.main',
        'ng-starter.header',
        'ng-starter.footer',
        'ng-starter.sidemenu',
        'ng-starter.vendor',
        'ng-starter.index',
        'ui.router'
    ]);

    ngStarter.config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider', '$provide', '$logProvider', '$compileProvider'];

    /**
     * ng-starter application config.
     * @param {$stateProvider} $stateProvider
     * @param {$urlRouterProvider} $urlRouterProvider
     * @param {$translateProvider} $translateProvider
     * @param {$provide} $provide
     * @param {$logProvider} $logProvider
     * @param {$compileProvider} $compileProvider
     */
    function config($stateProvider, $urlRouterProvider, $translateProvider, $provide, $logProvider, $compileProvider) {

        //Disable the log messages.
        $logProvider.debugEnabled(false);

        //Disable the debug info.
        $compileProvider.debugInfoEnabled(false);

        //Register the exception handler.
        $provide.decorator('$exceptionHandler', exceptionHandler);

        //Register the abstract states.
        registerStates($stateProvider, $urlRouterProvider);

        //Register translations.
        $translateProvider.useLoader('$translatePartialLoader', {urlTemplate: 'app/{part}/localizations/{lang}.json'});
        $translateProvider.preferredLanguage('en-US');
    }

    registerStates.$inject = ['$stateProvider', '$urlRouterProvider'];

    /**
     * Register the abstract application-wide states.
     * @param {$stateProvider} $stateProvider
     * @param {$urlRouterProvider} $urlRouterProvider
     */
    function registerStates($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('ngstarter', {
                abstract: true,
                views: {
                    '': {
                        controller: 'MainController',
                        templateUrl: '/app/main/main.html',
                        controllerAs: 'vm'
                    },
                    'header@ngstarter': {
                        controller: 'HeaderController',
                        templateUrl: '/app/header/header.html',
                        controllerAs: 'vm'
                    },
                    'footer@ngstarter': {
                        controller: 'FooterController',
                        templateUrl: '/app/footer/footer.html',
                        controllerAs: 'vm'
                    },
                    'sidemenu@ngstarter': {
                        controller: 'SideMenuController',
                        templateUrl: '/app/sidemenu/sidemenu.html',
                        controllerAs: 'vm'
                    }
                }
            });

        //Default url.
        $urlRouterProvider.otherwise('/index');
    }

    exceptionHandler.$inject = ['exceptionService'];

    /**
     * Angular global exception handler.
     * @param {exceptionService} exceptionService
     */
    function exceptionHandler(exceptionService) {
        return function (exception, cause) {
            exceptionService.handle(exception, cause);
        };
    }
})();
