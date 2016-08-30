'use strict';

/**
 * @ngdoc function
 * @name frontendApp.directive:Navbar
 * @description
 * # Navbar
 * Directive of the frontendApp
 */

angular.module('frontendApp').directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavigationController',
    controllerAs: 'Navigation'
  };
});
