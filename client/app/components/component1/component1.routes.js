var component1Routes = angular.module('component1Routes', []);

component1Routes.config(['$stateProvider', function($stateProvider) {
  $stateProvider

    .state('login', {
    templateUrl: "/client/app/components/component1/login.html",
    controller: 'accountCtrl',
    url: "/login"
  })


}])
