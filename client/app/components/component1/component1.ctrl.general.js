var app = angular.module('component1Ctrls', ['ngMaterial', 'ngMessages']);

app.controller('accountCtrl', ['$scope', function($scope) {
      "ngInject";
  $scope.status="hi";
}])
