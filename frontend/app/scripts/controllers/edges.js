'use strict';

angular.module('frontendApp')
  .controller('EdgesController', function ($scope, auth, edges, filterBy) {
    $scope.isLoggedIn = auth.isLoggedIn;
    $scope.edges = edges.query();
    $scope.filterBy = filterBy;

    $scope.edgeDelete = function(edge) {
      edge.$delete();
    };

    $scope.newEdge = new edges;
    $scope.editEdge = function(edge) {
      $scope.newEdge = edge;
      console.log($scope.newEdge);
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
