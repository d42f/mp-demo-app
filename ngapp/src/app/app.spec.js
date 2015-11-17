describe('AppCtrl', function () {
  describe('isCurrentUrl', function () {
    var AppCtrl, $location, $scope;

    beforeEach(module('mpApp'));

    beforeEach(inject(function ($controller, _$location_, $rootScope) {
      $location = _$location_;
      $scope = $rootScope.$new();
      AppCtrl = $controller('AppCtrl', {$scope: $scope});
    }));

    it('should pass a dummy test', inject(function () {
      expect(AppCtrl).toBeTruthy();
    }));
  });
});
