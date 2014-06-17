'use strict';

angular.module('mean.posts').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('Blog', {
            url: '/posts/',
            templateUrl: 'posts/views/index.html'
        }).state('lista', {
            url: '/posts/list/',
            templateUrl: 'posts/views/list.html'
        });
    }
]);
