
var mainApp = angular.module('indexApp',['ui.router','lbServices','mainSub']);

mainApp.config(['$stateProvider', '$urlRouterProvider', 
function($stateProvider,$urlRouterProvider) {
	
  $urlRouterProvider.otherwise('main');
	
  $stateProvider
    .state('main', {
        url: '',
	    views:{
			'' : {
		        templateUrl: 'view/main.html',		
				controller: 'mainCtrl',
			},
	        'title@main': {
                templateUrl: 'view/main.title.html',
            },
	        'tabs@main': {
                templateUrl: 'view/main.tabs.html',
            },
	        'jstree-html@main': {
                templateUrl: 'view/jstree-html.html',
            },
	    }
    }
  );
  
}]);

mainApp.run(function($rootScope){
	
});


