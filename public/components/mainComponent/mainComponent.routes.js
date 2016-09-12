var mainComponentRoutes = angular.module('mainComponentRoutes', []);

mainComponentRoutes.config(['$stateProvider', function($stateProvider) {
  $stateProvider

    .state('landing', {
    templateUrl: "/public/components/mainComponent/landing.html",
    controller: 'landingControl',
    url: "/start"
  })


}])
