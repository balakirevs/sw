'use strict';

angular.module('frontendApp').directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavigationController'
  };
});
