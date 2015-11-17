angular.module('mpApp', [
  'templates-app',
  'templates-common',

  'ui.router',

  'mpApp.auth'
])

.config(function appConfig ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/auth');
})

.run(function run () {
  //
})

.controller('AppCtrl', function AppCtrl ($scope) {
  $scope.$on('$stateChangeSuccess', function (evt, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle;
    }
  });
})

;

