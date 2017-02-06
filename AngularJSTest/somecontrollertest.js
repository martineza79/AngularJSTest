/// <reference path="c:\users\marti\documents\visual studio 2015\projects\angularjstest\angularjstest\scripts\angular.min.js" />
/// <reference path="c:\users\marti\documents\visual studio 2015\projects\angularjstest\angularjstest\scripts\angular-mocks.js" />
/// <reference path="c:\users\marti\documents\visual studio 2015\projects\angularjstest\angularjstest\somecontroller.js" />


describe('summingModule', function () {
    beforeEach(module('summingModule'));//using angular mock beforeEach(module()) function from the angular-mock.js refernce.


    describe('SumController', function () {
        var scope, controller;
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            controller = $controller('SumController', {
                $scope: scope 
            });

        }));

        it('should be able to return the sum of two values', function () {
            var result = scope.sum(10, 20);
            expect(result).toEqual(30);

        });

    });


});