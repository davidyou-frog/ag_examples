
var mainApp = angular.module('mainApp',['ui.router','lbServices']);

mainApp.config(['$stateProvider', '$urlRouterProvider', 
function($stateProvider,$urlRouterProvider) {
	
  $urlRouterProvider.otherwise('main');
	
  $stateProvider
    .state('main', {
      url: '',
      templateUrl: 'view/main.html',
      controller: 'mainCtrl',
  });

}]);

mainApp.run(function($rootScope){
	
});

// mainApp.config([]);			

// var app = angular.module('filetreeApp', ['lbServices','ngRoute', 'jsTree.directive']);
  
/*
(function() {
  'use strict';
 
  window.app = angular.module('filetreeApp', ['ngRoute', 'jsTree.directive']).
  config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
      when('/', {
        templateUrl: '../partials/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
    }
  ]);
 
}());

var app = angular.module('todoApp', ['lbServices']);
 
app.controller('todoController', function($scope, $http,Todo) {
 
 	$scope.todos = Todo.find();
 	$scope.todo;
 	$scope.loading=false;

  	$scope.add = function(){
  		$scope.loading=true;
  		
  		Todo.create({title: $scope.todo.title,isDone:false }).$promise
 			 .then(function(todo) { 
 			 		$scope.todos.push(todo);
 			 		$scope.todo.title='';
 			 		$scope.loading=false;
 			  });;
  	};

  	$scope.delete = function($index){
  		
  		$scope.loading=true;
  		var todo = $scope.todos[$index];
  		
  		Todo.deleteById({ id: todo.id}).$promise
		    .then(function() {
				$scope.todos.splice($index,1);
				$scope.loading=false;
		     });
  	};

  	$scope.update = function(todo){
  		todo.$save();
  	};
	
});

*/