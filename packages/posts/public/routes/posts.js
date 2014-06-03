'use strict';

//Setting up route
angular.module('mean.posts').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // states for my app
        $stateProvider
            .state('all bucket list', {
                url: '/bucketList',
                templateUrl: 'public/posts/views/list.html'
            })
            .state('add bucket list', {
                url: '/addBucketList',
                templateUrl: 'public/posts/views/create.html'
            });
    }
]);