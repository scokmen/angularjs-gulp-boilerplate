(function () {
    'use strict';

    angular.module('ng-starter.directives').directive('sideMenu', sideMenuDirective);

    function sideMenuDirective() {
        return {
            restrict: 'E',
            controllerAs: 'vm',
            controller: sideMenuDirectiveController,
            scope: {},
            templateUrl: '/app/directives/components/sidemenu/sidemenudirective.html',
            link: function () {
            }
        };
    }

    /**
     * <side-menu> directive controller.
     * @class
     * @classdesc <side-menu> directive controller.
     * @param {$translate} $translate
     * @memberOf ng-starter.directives
     */
    /* @ngInject */
    function sideMenuDirectiveController($translate) {
        var vm = this;

        //Toggle the side menu.
        vm.toggleSideMenu = function () {
            angular.element('#sidebar-wrapper').toggleClass('active');
        };

        //Toggle the language
        vm.toggleLanguage = function () {
            var currentLanguage = $translate.use();
            if (currentLanguage === 'en-US') {
                $translate.use('tr-TR');
            }
            else {
                $translate.use('en-US');
            }
        };
    }
})();