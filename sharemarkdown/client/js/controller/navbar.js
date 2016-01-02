'use strict';

/**
 * @ngdoc function
 * @name mainApp.controller:navbarCtrl
 * @description
 * # navbarCtrl
 * Controller of the mainApp
 */
var mainApp = angular.module('mainApp'); 
mainApp.controller('navbarCtrl', [ '$scope', 'authServices',  function ($scope, authServices ) {
   
 	$scope.logout = function  () {
 		authServices.logout();
 	};
	
}]);
