'use strict';

describe('EdgesController', function() {

  var scope, http, response;

  beforeEach(module('frontendApp'));

  beforeEach(inject(function($rootScope, $controller, $httpBackend) {
    http = $httpBackend;
    response = [ { key: 'hello' } ];
    http.whenGET('/api/edges').respond(response);

    scope = $rootScope.$new();
    $controller('EdgesController', {
      $scope: scope
    });
  }));

  afterEach(function() {
    http.verifyNoOutstandingExpectation();
    http.verifyNoOutstandingRequest();
  });

  it('makes request to api to fetch edges', function() {
    http.expectGET('/api/edges');
    http.flush();
  });

  it('assigns response data to edges', function() {
    http.flush();
    expect(scope.edges[0].key).toEqual('hello');
  });

  describe('displayRequirements', function() {
    var requirements;
    it('it concatenates name and value of the requirement', function() {
      http.flush();
      requirements = [{ name: 'Agility', value: 'd6' }];
      expect(scope.displayRequirements(requirements)).toEqual('Agility d6');
    });

    it('ignores name if it is null', function() {
      http.flush();
      requirements = [{ name: null, value: 'Novice' }];
      expect(scope.displayRequirements(requirements)).toEqual('Novice');
    });

    it('requriments are delimited by comma', function() {
      http.flush();
      requirements = [{ name: null, value: 'Novice' }, { name: 'Agility', value: 'd6' }];
      expect(scope.displayRequirements(requirements)).toEqual('Novice, Agility d6');
    });
  });
});
