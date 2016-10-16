'use strict';
 
angular.module('myApp', ['ngRoute','myApp.home', 'myApp.register'])
.config(['$routeProvider', function($routeProvider) {
 // Routes will be here
 	$routeProvider.otherwise({ redirectTo: '/home' })
}]);