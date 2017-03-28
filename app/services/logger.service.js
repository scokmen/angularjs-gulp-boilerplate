(function () {
    'use strict';

    angular.module('ng-starter.services').service('loggerService', loggerService);

    /**
     * Logger service.
     * @class
     * @classdesc A angular service for logging.
     * @memberOf ng-starter.services
     */
    /* @ngInject */
    function loggerService() {

        return {
            success: success,
            info: info,
            warning: warning,
            error: error
        };

        /**
         * Log a success message.
         * @param {string} message
         * @public
         */
        function success(message) {
            //TODO: Replace with your mechanism.
            console.log(message);
        }

        /**
         * Log a info message.
         * @param {string} message
         * @public
         */
        function info(message) {
            //TODO: Replace with your mechanism.
            console.info(message);
        }

        /**
         * Log a warning message.
         * @param {string} message
         * @public
         */
        function warning(message) {
            //TODO: Replace with your mechanism.
            console.warn(message);
        }

        /**
         * Log a error message.
         * @param {string} message
         * @public
         */
        function error(message) {
            //TODO: Replace with your mechanism.
            console.error(message);
        }
    }
})();
