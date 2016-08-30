'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the frontendApp
 */

angular.module('frontendApp')
  .controller('NavigationController', function($scope, $location) {

    $scope.isActive = function (path) {
      return path === $location.path();
    }
});
