var mainSub = angular.module('mainSub',['ui.bootstrap','ui.router','jsTree.directive'])

mainSub.controller( 'mainCtrl', [ '$scope',
  function($scope) {
	  $scope.treeData = [{
         "id": "ajson1",
         "parent": "#",
         "text": "Simple root node"
       }, {
         "id": "ajson2",
         "parent": "#",
         "text": "Root node 2"
       }, {
         "id": "ajson3",
         "parent": "ajson2",
         "text": "Child 1",
		 "icon":"img/png.png"
       }, {
         "id": "ajson4",
         "parent": "ajson2",
         "text": "Child 2"
       }];
  }
]);


