'use strict';

angular.module('frontendApp').factory('categories', function($resource) {
  return $resource('/api/categories');
});
