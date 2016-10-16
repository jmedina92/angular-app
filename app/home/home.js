'use strict';
 
angular.module('myApp.home', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller
.controller('HomeCtrl', ['$scope',function($scope) {
	$scope.SignIn = function(event) {
	event.preventDefault();  // To prevent form refresh
	    var username = $scope.user.email;
	    var password = $scope.user.password;
	     
	    firebase.auth().signInWithEmailAndPassword(username, password).then(function(user){
	    	if (user) {
	    		console.log(user);
	    	}
	    }).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(error);
		});
	}
}]);