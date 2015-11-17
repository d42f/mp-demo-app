angular.module('mpApp.auth', [])

.config(function config ($stateProvider) {
  $stateProvider.state('auth', {
    url: '/auth',
    views: {
      'main': {
        controller: 'AuthCtrl',
        templateUrl: 'auth/auth.tpl.html'
      }
    },
    data:{
      pageTitle: 'Auth'
    }
  });
})

.controller('AuthCtrl', function AuthCtrl ($scope) {
  //
})

;
