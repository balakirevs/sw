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
      var currentPath = $location.path().split('/')[1].split('?')[0];
      return currentPath === path.split('/')[1];
    }
});
