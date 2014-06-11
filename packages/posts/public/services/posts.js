'use strict';

angular.module('mean.posts').factory('Posts', ['$resource',
    function($resource) {
        return $resource('articles/:articleId', {
            articleId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);
