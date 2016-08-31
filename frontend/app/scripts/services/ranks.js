'use strict';

angular.module('frontendApp').service('ranks', function() {
  this.query = function() {
    return [
      {
        name: 'All'
      },
      {
        name: 'Novice'
      },
      {
        name: 'Seasoned'
      }
    ];
  };
});
