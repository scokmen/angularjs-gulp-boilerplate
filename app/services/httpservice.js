(function() {
    'use strict';

    angular.module('ng-starter.services').service('httpService', httpService);

    httpService.$inject = ['$q', '$http'];

    /**
     * Abstraction for angular $http service.
     * @class
     * @classdesc Abstraction for angular $http service for improve controls over http calls.
     */
    function httpService($q, $http) {

        return {
            get: get,
            post: post,
            put: put,
            del: del
        };

        /**
         * Send a http request over the wrapped angular $http service.
         * @param {string} method
         * @param {string} url
         * @param {object} [data]
         * @returns {promise}
         */
        function call(method, url, data) {

            var deferred = $q.defer();

            $http({
                method: method,
                url: url,
                data: data
            }).then(function(successResponse) {
                    deferred.resolve(successResponse.data);
                },
                function(failedResponse) {
                    deferred.reject(failedResponse);
                });

            return deferred.promise;
        }

        /**
         * Send http get request to given url with data.
         * @param {string} url
         * @param {object} [data]
         * @returns {promise}
         */
        function get(url, data) {
            return call('GET', url, data);
        }

        /**
         * Send http post request to given url with data.
         * @param {string} url
         * @param {object} [data]
         * @returns {promise}
         */
        function post(url, data) {
            return call('POST', url, data);
        }

        /**
         * Send http put request to given url with data.
         * @param {string} url
         * @param {object} [data]
         * @returns {promise}
         */
        function put(url, data) {
            return call('PUT', url, data);
        }

        /**
         * Send http delete request to given url with data.
         * @param {string} url
         * @param {object} [data]
         * @returns {promise}
         */
        function del(url, data) {
            return call('DELETE', url, data);
        }

        /**
         * Build a url from given array.
         * @param {string[]} paths
         * @returns {string}
         */
        function join(paths) {
            var cleanPaths = _.map(paths,
                function(path) {
                    return _.trim(path, '/');
                });
            return cleanPaths.join('/');
        }
    }
})();
