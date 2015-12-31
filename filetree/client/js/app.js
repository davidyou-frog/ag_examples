
var mainApp = angular.module('indexApp',['ui.router','lbServices','mainSub','jstreeSub']);

mainApp.config(['$stateProvider', '$urlRouterProvider', 
function($stateProvider,$urlRouterProvider) {
	
  $urlRouterProvider.otherwise('main');
	
  $stateProvider
    .state('main', {
		url: '/main',  
	    views:{
			''                : { templateUrl: 'view/main.html'         , controller: 'mainCtrl' },
	        'title@main'      : { templateUrl: 'view/main.title.html'   },
	        'jstree-html@main': { templateUrl: 'view/jstree-html.html'  },
	        'jstree-json@main': { templateUrl: 'view/jstree-json.html'  },
	        'jstree-ctrl@main': { templateUrl: 'view/jstree-ctrl.html'  , controller:  'jstreeCtrl' },
	    }
    })
     .state('basic', {
		url: '/basic',  
	    views:{
			''                : { templateUrl: 'view/basic.html'         , controller: 'basicCtrl' },
	        'title@basic'      : { templateUrl: 'view/basic.title.html'   },
	        'jstree-html@basic': { templateUrl: 'view/jstree-html.html'  },
	        'jstree-json@basic': { templateUrl: 'view/jstree-json.html'  },
	        'jstree-ctrl@basic': { templateUrl: 'view/jstree-ctrl.html'  , controller:  'jstreeCtrl' },
	    }
    }) ;
  
}]);

mainApp.run(function($rootScope){
	
});
