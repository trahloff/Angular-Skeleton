angular
    .module('mainComponentRoutes', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
            .state('landing', {
              templateUrl: '/components/mainComponent/landing.html',
              controller: 'landingControl',
              url: '/start'
            })
    }])
