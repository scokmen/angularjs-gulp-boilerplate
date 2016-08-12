(function () {
    'use strict';

    angular.module('ng-starter.index').controller('IndexController', IndexController);

    IndexController.$inject = [];

    /**
     * IndexController
     * @class
     * @classdesc Controller method of 'ng-starter.index' module.
     * @memberOf ng-starter.index
     */
    function IndexController() {
        console.log('INDEX');
    }

})();
