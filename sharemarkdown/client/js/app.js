
var mainApp = angular.module('mainApp',
['ui.router','lbServices','mainSub','formly', 'formlyBootstrap' ]);
/*
    ,'ngSanitize'
    ,'ngResource'
    ,'angularMoment'
*/

mainApp.config([ '$stateProvider','$urlRouterProvider','LoopBackResourceProvider','$httpProvider',
function($stateProvider,$urlRouterProvider,LoopBackResourceProvider,$httpProvider) {
	
  LoopBackResourceProvider.setUrlBase('http://192.168.10.61:3000/api');
  $urlRouterProvider.otherwise('main');
	
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
		controller : 'authCtrl'
    })
    .state('signin', {
		url: '/login',
		templateUrl: 'view/signin.html',
		controller : 'authCtrl'
    })
    ;

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

mainApp.run(function($rootScope){
	
});

