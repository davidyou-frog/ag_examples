
var mainApp = angular.module('indexApp',['ui.router','lbServices','mainSub']);

mainApp.config(['$stateProvider', '$urlRouterProvider', 
function($stateProvider,$urlRouterProvider) {
	
  $urlRouterProvider.otherwise('main');
	
  $stateProvider
    .state('main', {
		url: '/main',  
		templateUrl: 'view/main.html',
		controller: 'mainCtrl'
    })
	
    ; // END STATE
  
}]);

mainApp.run(function($rootScope){
	
});
