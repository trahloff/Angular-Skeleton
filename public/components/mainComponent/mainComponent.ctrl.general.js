'use strict'
angular
    .module('mainComponentCtrls', ['ngMaterial', 'ngMessages'])
    .controller('landingControl', ['$scope', '$http', function ($scope, $http) {
      $scope.value = 1
      $scope.increment = function () {
        $scope.value++
      }
      $scope.decrement = function () {
        $scope.value--
      }
      $scope.pingBackend = function () {
        $http({
          method: 'GET',
          url: '/default/hello'
        }).then(function successCallback (response) {
          alert(response.data)
        }, function errorCallback (response) {
          alert(response.data)
        })
      }
    }])
