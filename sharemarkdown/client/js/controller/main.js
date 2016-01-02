var mainSub = angular.module('mainSub',['ui.bootstrap','ui.router','jsTree.directive', 'fileServices'])

mainSub.controller( 'mainCtrl', [ '$scope', 'File', '$rootScope',
  function($scope,File,$rootScope) {
	  
	  $scope.islogged=$rootScope.islogged;
	  $scope.fileContents = 'Please select a file to view its contents';
	  
	  $scope.nodeSelected = function(e, data) {
		  
		  var leaf = data.node.li_attr;
		  
		  if (leaf.isLeaf) {

			  File.readContents(leaf.base).then(function(data) {

				  var file_data = data.data;
                  if (typeof file_data== 'object') {
					   file_data = JSON.stringify(file_data, undefined, 2);
                  }
                  $scope.fileContents = file_data;
			  });

		  } else {
			  $scope.$apply(function() {
                  $scope.fileContents = 'This is a directory.';
              });
		  }
	  };

  }
]);
