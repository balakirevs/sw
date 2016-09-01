'use strict';

angular.module('frontendApp').controller('LogoutController', function(auth, $location) {
  auth.logout();
});
