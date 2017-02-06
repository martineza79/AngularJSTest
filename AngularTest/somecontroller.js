angular.module('summingModule', [])
    .controller('SumController', function ($scope) {

        $scope.sum = function(first, second) {
            return first + second;
        };


    });