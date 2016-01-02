'use strict';

/**
 * @ngdoc function
 * @name mainApp.controller:navbarCtrl
 * @description
 * # navbarCtrl
 * Controller of the mainApp
 */
var mainApp = angular.module('mainApp'); 
mainApp.controller('navbarCtrl', [ '$scope', '$rootScope', 'authServices',  function ($scope, $rootScope, authServices ) {
   
    $scope.isLoggedin=false;

    authServices.ensureCurrentUser(function(){
 		$scope.currentUser=authServices.currentUser;
 		$scope.islogged=$rootScope.islogged;
 	});

    $rootScope.$watch('islogged', function(newValue, oldValue) {
 		$scope.isLoggedin=newValue;
 		if(newValue){
 			$scope.currentUser=authServices.currentUser;
    		$scope.isLoggedin=newValue;
 		}
 	});
	
 	$scope.logout = function  () {
 		authServices.logout();
 	};
	
}]);
