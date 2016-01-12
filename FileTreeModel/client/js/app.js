var mainApp = angular.module('mainApp',['ui.router']);

mainApp.config([ '$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('before_login', {
		url        : '/before_login',
		templateUrl: 'view/before_login.html',
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

