'use strict';

var app = angular.module('Angular-Skeleton', // general tools HAVE to be loaded before the main components
  [
    //general tools
    'ui.router', 'ngMaterial','btford.socket-io',

    //components
    'mainComponent.main',

    //services, factories, filters
    'debuggingServices'
  ]);

//some general app config stuff
app.config(['$mdThemingProvider', '$urlRouterProvider', function($mdThemingProvider, $urlRouterProvider) {
  'use strict';

  $mdThemingProvider.theme('docs-dark', 'default') //defines the color scheme for the app. possible schemes: http://www.google.com/design/spec/style/color.html#
    .primaryPalette('yellow')
    .dark();

  $urlRouterProvider.otherwise('/start'); //if the user types some gibberish for an url he gets redirected to the login page

}])
