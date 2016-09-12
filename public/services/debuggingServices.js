var app = angular.module('debuggingServices', []);

app.service('watcherDebugService', ["$http", function($http) {


    this.countActiveWatchers = function() {
        var root = $(document.getElementsByTagName('body'));
        var watchers = [];
        var f = function(element) {
            if (element.data().hasOwnProperty('$scope')) {
                angular.forEach(element.data().$scope.$$watchers, function(watcher) {
                    watchers.push(watcher);
                });
            }
            angular.forEach(element.children(), function(childElement) {
                f($(childElement));
            });
        };
        f(root);
        return watchers.length;
    }


}]);
