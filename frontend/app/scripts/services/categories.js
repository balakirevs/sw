'use strict';

angular.module('frontendApp').service('categories', function() {
  this.query = function() {
    return [
      {
        name: 'All'
      },
      {
        name: 'Background'
      },
      {
        name: 'Combat'
      },
      {
        name: 'Leadership'
      }
    ]
  }
});
