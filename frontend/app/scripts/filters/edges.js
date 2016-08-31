'use strict';

angular.module('frontendApp').filter('edges', function () {

  var getRank = function(requirements) {
    var requirement = {};
    for (var i = 0; i < requirements.length; i++) {
      if (requirements[i].mode === 'rank') {
        requirement = requirements[i];
        break;
      }
    }
    return requirement.value;
  };

  return function(edges, filterBy) {
    return edges.filter(function(element, index, array) {
      var category = (element.category.name === filterBy.category.name || filterBy.category.name === 'All');
      var rank = (getRank(element.requirements) === filterBy.rank.name || filterBy.rank.name === 'All');
      return category && rank;
    });
  };
});
