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
		
	currentUser : null,
	
  	ensureCurrentUser: function(cb){
						
  		           	    if( GeneralUser.isAuthenticated() && self.currentUser == null){
  		           	    	$rootScope.islogged=true;  				
  		           	    	GeneralUser.getCurrent().$promise.then(function(user){
  		           	    		self.currentUser = user;
  		           	    		cb();
  		           	    	});
  		           	    }
  		           },

    signup      : function(new_user){
                      GeneralUser.create(new_user).$promise.then(function (user) {
						  console.log( 'call GeneralUser.create(new_user)' );
						  console.log( 'user = ', user );
						  $state.go( 'signin' );

//                          GeneralUser.login({email: new_user.email, password: new_user.password}).$promise.then(function (res) {
//							  console.log( 'call GeneralUser.login(new_user)' );
//                              self.currentUser=res.user;
//                              $rootScope.islogged=true;
//							  $state.go( 'main' );
////                              $location.path('/#/main');
//                          },function (data) {
//						      console.log( 'fail call GeneralUser.login(new_user)' );
//					      });
                      });
                  },
//
				  
	login       : function  (user){
                       GeneralUser.login(user).$promise.then(function(res) {
							 self.currentUser=res.user;
							 $rootScope.islogged=true;
							 console.log( 'login callback' );
							 $state.go( 'main' );
//                             if($location.nextAfterLogin === null) {
//								 console.log( 'login pass2' ); 
//                                  $location.path('/#/main');
//                             }else{
//								 console.log( 'login pass3' ); 
//                                  $location.path($location.nextAfterLogin);
//                             } 				
                         });
	              },
				  
  	logout      : function(){
  		           	    GeneralUser.logout().$promise.then(function(){
//  		           		    $location.path('/#/main');
							$state.go( 'main' );
  		           		    $rootScope.islogged=false;
  		           		    self.currentUser=null;
  		           	    });
  		           },
				  
	}
	
	return self;
  
}]);
