'use strict';

angular.module('frontendApp').factory('edges', function($resource) {
  return $resource('/api/edges/:id', { id: '@id'}, { 'update': { method: 'PUT' } } );
});
