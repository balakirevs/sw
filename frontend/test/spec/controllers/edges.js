'use strict';

describe('EdgesController', function() {

  var scope, controller;

  beforeEach(module('frontendApp'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('EdgesController', {
      $scope: scope
    });
  }));

  describe('displayRequirements', function() {
    var requirements;
    it('it concatenates name and value of the requirement', function() {
      requirements = [{ name: 'Agility', value: 'd6' }];
      expect(scope.displayRequirements(requirements)).toEqual('Agility d6');
    });

    it('ignores name if it is null', function() {
      requirements = [{ name: null, value: 'Novice' }];
      expect(scope.displayRequirements(requirements)).toEqual('Novice');
    });

    it('requriments are delimited by comma', function() {
      requirements = [{ name: null, value: 'Novice' }, { name: 'Agility', value: 'd6' }];
      expect(scope.displayRequirements(requirements)).toEqual('Novice, Agility d6');
    });
  });
});
