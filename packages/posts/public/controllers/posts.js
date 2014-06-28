'use strict';

angular.module('mean.posts').controller('PostsController', ['$scope', 'Global', 'Posts',
    function($scope, Global, Posts) {
        $scope.global = Global;
        $scope.package = {
            name: 'posts'
        };

        $scope.itemsPerPage = 5;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };
        $scope.find = function() {
            Posts.query({offset: 0, itemsPerPage: $scope.itemsPerPage, sortType: 'DESC' }, function(posts,responseHeaders) {
                $scope.totalItems = responseHeaders.totalItems;
                $scope.numPages = responseHeaders.numPages;

                $scope.posts = posts;
            });
        };
        $scope.pageChanged = function() {
            $scope.find = function() {
                Posts.query({offset: $scope.currentPage, itemsPerPage: $scope.itemsPerPage, sortType: 'DESC' }, function(posts,responseHeaders) {
                    $scope.totalItems = responseHeaders.totalItems;
                    $scope.numPages = responseHeaders.numPages;

                    $scope.posts = posts;
                });
            };
        };

    }
]);
