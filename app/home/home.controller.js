(function () {
    'use strict';

    angular.module('ng-starter.home').controller('HomeController', HomeController);

    HomeController.$inject = [];

    /**
     * HomeController
     * @class
     * @classdesc Controller method of 'ng-starter.home' module.
     * @memberOf ng-starter.home
     */
    function HomeController() {
        console.log('HOME');
    }

})();
