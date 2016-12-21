'use strict';

var app = angular.module('mainComponentCtrls', ['ngMaterial', 'ngMessages']);

app.controller('landingControl', ['$scope', function($scope) {

    $scope.value = 1;

    $scope.increment = function() {
        $scope.value++;
    };

    $scope.decrement = function() {
        $scope.value--;
    };
}])
