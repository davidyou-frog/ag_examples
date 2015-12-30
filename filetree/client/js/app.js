
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
	        'jstree-html@main': {
                templateUrl: 'view/jstree-html.html',
            },
	        'jstree-json@main': {
                templateUrl: 'view/jstree-json.html',
            },
	        'jstree-ctrl@main': {
                templateUrl: 'view/jstree-ctrl.html',
            },
	    }
    }
  );
  
}]);

mainApp.run(function($rootScope){
	
});


