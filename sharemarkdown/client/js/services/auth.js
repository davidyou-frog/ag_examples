'use strict';

/**
 * @ngdoc service
 * @name mainApp.authServices
 * @description
 * # mainApp
 * authServices in the mainApp.
 */
var mainApp = angular.module('mainApp');
mainApp.factory(
'authServices', ['GeneralUser', '$q', '$rootScope','$location', '$state', 
function( GeneralUser, $q, $rootScope, $location , $state ) {
	
    var self ={
		
    signup      : function(new_user){
                      GeneralUser.create(new_user).$promise.then(function (user) {
						  console.log( 'call GeneralUser.create(new_user)' );
						  console.log( 'user = ', user );
						  $state.go( 'signin' );
                      });
                  },
				  
	login       : function  (user){
                       GeneralUser.login(user).$promise.then(function(res) {
						     $rootScope.currentUser=res.user;
							 $state.go( 'main' );
                         });
	              },
				  
  	logout      : function(){
  		           	    GeneralUser.logout().$promise.then(function(){
							 $rootScope.currentUser=null;
							 $state.go( 'main' );
  		           	    });
  		           },
				  
	}
	
	return self;
  
}]);
