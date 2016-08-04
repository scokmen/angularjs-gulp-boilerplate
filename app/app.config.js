(function() {
    'use strict';

    var ngStarter = angular.module('ng-starter', [
        'ui.router'
    ]);

    ngStarter.config(config);

    config.$inject = ['$stateProvider', '$provide', '$logProvider', '$compileProvider'];

    /**
     * ng-starter application config.
     */
    function config($stateProvider, $provide, $logProvider, $compileProvider) {

        //Disable the log messages.
        $logProvider.debugEnabled(false);

        //Disable the debug info.
        $compileProvider.debugInfoEnabled(false);

        //Register the exception handler.
        $provide.decorator('$exceptionHandler', exceptionHandler);

        //Register states.
        registerStates($stateProvider);
    }

    registerStates.$inject = ['$stateProvider'];

    /**
     * Register the application-wide states.
     */
    function registerStates($stateProvider) {
        $stateProvider
            .state('ngstarter', {
                abstract: true,
                views: {
                    '': {
                        controller: 'MainController',
                        templateUrl: '/app/main/index.html',
                        controllerAs: 'vm'
                    },
                    'header@ngstarter': {
                        controller: 'HeaderController',
                        templateUrl: '/app/header/index.html',
                        controllerAs: 'vm'
                    },
                    'footer@ngstarter': {
                        controller: 'FooterController',
                        templateUrl: '/app/footer/index.html',
                        controllerAs: 'vm'
                    },
                    'sidemenu@ngstarter': {
                        controller: 'SideMenuController',
                        templateUrl: '/app/sidemenu/index.html',
                        controllerAs: 'vm'
                    }
                }
            });
    }

    extendExceptionHandler.$inject = ['$delegate'];

    /**
     * Angularjs global exception handler.
     */
    function exceptionHandler($delegate) {
        return function(exception, cause) {
            //TODO: Handle exception here in your way.
        };
    }
})();
