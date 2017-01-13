'use strict';

angular
    .module('Angular-Skeleton', // tools HAVE to be loaded before the main components
        [
            // tools
            'ui.router', 'ngMaterial',
            // components
            'mainComponent.main',
            // services, factories, filters
            'debuggingServices'
        ])
    .config(['$mdThemingProvider', '$urlRouterProvider', '$qProvider', function($mdThemingProvider, $urlRouterProvider, $qProvider) {
        $mdThemingProvider.theme('docs-dark', 'default');
        $urlRouterProvider.otherwise('/start'); // if the user types some gibberish for an url he gets redirected to this page
        $qProvider.errorOnUnhandledRejections(false); // http://stackoverflow.com/a/40366492/5845681 very ugly bug. no solution available, only workarounds
    }])
