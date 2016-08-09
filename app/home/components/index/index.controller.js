(function () {
    'use strict';

    angular.module('ng-starter.home').controller('IndexController', IndexController);

    IndexController.$inject = [];

    /**
     * IndexController
     * @class
     * @classdesc Controller method of 'ng-starter.home' index component.
     * @memberOf ng-starter.home
     */
    function IndexController() {
        console.log('INDEX');
    }

})();
