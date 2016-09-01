'use strict';

angular.module('frontendApp').controller('AdminController', function($http) {
  $http.get('/api/users');
});
