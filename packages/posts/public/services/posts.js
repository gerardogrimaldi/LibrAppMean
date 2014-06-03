/**
 * Created by Gerardo on 01/06/2014.
 */
'use strict';

angular.module('mean.bucketList').factory('BucketList', ['$resource',
    function($resource) {
        return $resource('bucketList');
    }
]);