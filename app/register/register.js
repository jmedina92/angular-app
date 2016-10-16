'use strict';
 
angular.module('myApp.register', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/register', {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl'
    });
}])
 
// Home controller
.controller('RegisterCtrl', ['$scope',function($scope) {
	$scope.RegisterIn = function(event) {
		event.preventDefault();  // To prevent form refresh
	    var email = $scope.user.email;
	    var password = $scope.user.password;
	     
	    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
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

