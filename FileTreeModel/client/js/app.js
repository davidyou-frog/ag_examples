(function(){
'use strict';
var mainApp = angular.module('mainApp',['ui.router','lbServices','formly', 'formlyBootstrap']);

mainApp.config([ '$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('before_login', {
		url        : '/before_login',
		templateUrl: 'view/before_login.html',
    })
    .state('signup', {
		url: '/signup',
		templateUrl: 'view/signup.html',
		controller : 'signupCtrl'
    })
    .state('login', {
		url: '/login',
		templateUrl: 'view/login.html',
		controller : 'loginCtrl'
    })
    .state('main', {
		url        : '/main',
		templateUrl: 'view/main.html',
    })
    ;
	
	$urlRouterProvider.otherwise('before_login');
	
}]);


mainApp.run( ['$rootScope', function($rootScope){

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log( 'Event $stateChangeStart' );
		console.log( '  event = ', event );
		console.log( '  toState = ', toState );
		console.log( '  toParams = ', toParams );
		console.log( '  fromState = ', fromState );
		console.log( '  fromParams = ', fromParams );
    });
	
}]);

})();
