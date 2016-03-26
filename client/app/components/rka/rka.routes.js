var rkaRoutes = angular.module('rkaRoutes', []);

rkaRoutes.config(['$stateProvider', function($stateProvider) {
  $stateProvider

    .state('login', {
    templateUrl: "perspectives/sharedPerspective/login.html",
    controller: 'loginCtrl',
    url: "/login"
  })

  .state('chill', {
    templateUrl: "perspectives/sharedPerspective/chill.html",
    controller: 'chillCtrl',
    url: "/stackOverflowAndChill"
  })

}])
