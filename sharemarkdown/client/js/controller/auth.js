'use strict';

/**
 * @ngdoc function
 * @name mainApp.controller:authCtrl
 * @description
 * # authCtrl
 * Controller of the mainApp
 */
var mainApp = angular.module('mainApp'); 
mainApp.controller('authCtrl', [ '$scope', 'authServices', function ($scope,authServices) {

    $scope.loginFields = [{
        key: 'email',
        type: 'input',
        templateOptions: {
            required: true,
            label: 'Email',
        }
    },{
        key: 'password',
        type: 'input',
        templateOptions: {
            type:"password",	
            required: true,
            label: 'Password',
        }
    }];
	
  	 $scope.RegisterFields = [
      {
        key: 'firstName',
        type: 'input',
        templateOptions: {
          required: true,
          label: 'First Name',
        }
      },{
        key: 'lastName',
        type: 'input',
        templateOptions: {
          required: true,
          label: 'Last Name',
        }
      },{
        key: 'email',
        type: 'input',
        templateOptions: {
          required: true,
          label: 'Email',
        }
      },{
        key: 'password',
        type: 'input',
        templateOptions: {
          type:"password",	
          required: true,
          label: 'Password',
        }
      }];
	
	  
  	 $scope.login = function(user){
  	 	 authServices.login(user);
  	 };
	 
     $scope.signup = function(newUser){
         authServices.signup(newUser);
     };

}]);  
  