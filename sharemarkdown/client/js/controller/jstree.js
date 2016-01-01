var mainSub = angular.module('jstreeSub',['jsTree.directive'])

mainSub.controller( 'jstreeCtrl', [ '$scope',
  function($scope) {
	  $scope.treeData = [{
         "id": "ajson1",
         "parent": "#",
         "text": "Simple root node ver2"
       }, {
         "id": "ajson2",
         "parent": "#",
         "text": "Root node 2",
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
