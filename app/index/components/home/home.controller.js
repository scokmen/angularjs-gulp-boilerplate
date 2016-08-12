(function () {
    'use strict';

    angular.module('ng-starter.index').controller('HomeController', HomeController);

    HomeController.$inject = [];

    /**
     * HomeController
     * @class
     * @classdesc Controller method of 'ng-starter.index' index component.
     * @memberOf ng-starter.index
     */
    function HomeController() {
        console.log('HOME');
    }

})();
