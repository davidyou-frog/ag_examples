
var mainApp = angular.module('mainApp',
['ui.router','lbServices','mainSub','formly', 'formlyBootstrap' ]);
/*
    ,'ngSanitize'
    ,'ngResource'
    ,'angularMoment'
*/

mainApp.config([ '$stateProvider','$urlRouterProvider','LoopBackResourceProvider','$httpProvider',
function($stateProvider,$urlRouterProvider,LoopBackResourceProvider,$httpProvider) {
	
  $stateProvider
    .state('main', {
		url: '/main',  
	    views:{
			''                : { templateUrl: 'view/main.html'         , controller: 'mainCtrl' },
	        'title@main'      : { templateUrl: 'view/main.title.html'   },
	    }
    })
    .state('signup', {
		url: '/signup',
		templateUrl: 'view/signup.html',
		controller : 'signupCtrl'
    })
    .state('signin', {
		url: '/login',
		templateUrl: 'view/signin.html',
		controller : 'signinCtrl'
    })
    .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'view/forbidden.html',
      })	
    ;
	
	$urlRouterProvider.otherwise('main');

    // Inside app config block
    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth,$rootScope) {
        return {
            responseError: function(rejection) {
				 console.log( 'rejection.status = ' , rejection.status );
                 if (rejection.status === 401) {
                     //Now clearing the loopback values from client browser for safe logout...
                     LoopBackAuth.clearUser();
                     LoopBackAuth.clearStorage();
					 $rootScope.$state.go( 'signin' );
                 }
                 return $q.reject(rejection);
            }
        };
    });
	
}]);

mainApp.run( ['$rootScope', '$state', function($rootScope,$state){
	
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        // redirect to login page if not logged in
		console.log( 'Event $stateChangeStart' );
		console.log( '  event = ', event );
		console.log( '  toState = ', toState );
		console.log( '  toParams = ', toParams );
		console.log( '  fromState = ', fromState );
		console.log( '  fromParams = ', fromParams );
//		console.log( '  next.authenticate = ', next.authenticate );
		console.log( '  $rootScope.currentUser = ', $rootScope.currentUser );
//        if (next.authenticate && !$rootScope.currentUser) {
//            event.preventDefault(); //prevent current page from loading
//            $state.go('forbidden');
//        }
    });	
	
}]);

