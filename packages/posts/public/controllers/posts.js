'use strict';

angular.module('mean.posts').controller('PostsController', ['$scope', 'Global', 'Posts',
    function($scope, Global, Posts) {
        $scope.global = Global;
        $scope.package = {
            name: 'posts'
        };

        $scope.find = function() {
            Posts.query(function(posts,responseHeaders) {
                $scope.asd = responseHeaders;
                $scope.posts = posts;
            });
        };
    }
]);
