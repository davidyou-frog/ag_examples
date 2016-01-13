(function(){
'use strict';
var mainApp = angular.module('mainApp',['ui.router','lbServices','formly', 'formlyBootstrap']);

mainApp.config([ '$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('before_login', {
		url        : '/before_login',
		templateUrl: 'view/before_login.html',
		skipLogin : true
    })
    .state('signup', {
		url: '/signup',
		templateUrl: 'view/signup.html',
		controller : 'signupCtrl',
		skipLogin : true
    })
    .state('login', {
		url: '/login',
		templateUrl: 'view/login.html',
		controller : 'loginCtrl',
		skipLogin : true
    })
    .state('main', {
		url: '/main',  
	    views:{
			''                : { templateUrl: 'view/main.html'                                  },
	        'filetree@main'   : { templateUrl: 'view/filetree.html' , controller: 'filetreeCtrl' }, 
	    },
		skipLogin : false
    })
    ;
	
	$urlRouterProvider.otherwise('before_login');
	
}]);


mainApp.run( ['$rootScope', '$state', 'GeneralUser', function($rootScope, $state, GeneralUser ){

	if( GeneralUser.isAuthenticated() ){
		GeneralUser.getCurrent( function( user ){
			console.log( 'Callback GeneralUser.getCurrent()' );
			$rootScope.currentUser = GeneralUser.getCachedCurrent();
			console.log( '  $rootScope.currentUser ', $rootScope.currentUser );
			$state.transitionTo(localStorage['LastState']);
			
		});
	}
	
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log( 'Event $stateChangeStart' );
		console.log( '  toState = ', toState );
		console.log( '  $rootScope.currentUser ', $rootScope.currentUser );
		 
		if( !$rootScope.currentUser && !toState.skipLogin ){
			$state.transitionTo('before_login');
            event.preventDefault();
		}
		
		localStorage['LastState'] = toState.name;

    });
	
}]);

})();
