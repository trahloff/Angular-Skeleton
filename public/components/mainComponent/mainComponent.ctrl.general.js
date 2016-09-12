var app = angular.module('mainComponentCtrls', ['ngMaterial', 'ngMessages']);

app.controller('landingControl', ['$scope', function($scope) {

    $scope.status = 1;

    $scope.increment = function() {

        $scope.status++;
    };

    $scope.decrement = function() {
        $scope.status--;
    };
}])
