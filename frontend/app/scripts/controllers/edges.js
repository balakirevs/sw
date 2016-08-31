'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EdgesCtrl
 * @description
 * # EdgesCtrl
 * Controller of the frontendApp
 */

angular.module('frontendApp')
  .controller('EdgesController', function ($scope, edges, categories, ranks) {
    $scope.edges = edges.query();
    $scope.categories = categories.query();
    $scope.ranks = ranks.query();

    $scope.filterBy = {
      search: '',
      category: $scope.categories[0],
      rank: $scope.ranks[0]
    };

    var selectedEdge = null;

    $scope.selectEdge = function (edge) {
      selectedEdge = (selectedEdge === edge) ? null : edge;
    };

    $scope.isSelected = function (edge) {
      return edge === selectedEdge;
    };

    $scope.displayRequirements = function(requirements) {
      var result = '';
      for (var i = 0; i < requirements.length; i++) {
        if (result !== '') { result += ', '; }
        if (requirements[i].name) { result += requirements[i].name + ' '; }
        result += requirements[i].value;
      }
      return result;
    };
});
