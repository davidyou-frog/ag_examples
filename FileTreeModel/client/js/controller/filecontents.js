(function(){
'use strict';

var mainApp = angular.module('mainApp'); 
mainApp.controller('filecontentsCtrl', 
[ '$rootScope', '$scope','$element','FileTree', 'LoopBackResource',
function ($rootScope, $scope,$element,FileTree,Resource) {

    $scope.aceLoaded = function(ace_editor){
		
		var ace_renderer = ace_editor.renderer;
		
		var aceOption = {
		    showGutter  : true,
			displayIndentGuides: true,
			fontSize: 16,
			hScrollBarAlwaysVisible:true,
            vScrollBarAlwaysVisible:true,
			theme: 'ace/theme/terminal',
			mode: 'ace/mode/javascript',
		}
		
		ace_editor.setOptions( aceOption );
		
    };

    $scope.contents = 'no select';
	
	$rootScope.$on( "filetree:select_node", function( e, data ){ 
		
	    var leaf = data.node.li_attr;
		  
		if (leaf.isLeaf) {
			FileTree.file( { id : data.node.id } ).$promise.then(function ( value,responseHeaders) {

				  var file_data = value.contents;
                  if (typeof file_data== 'object') {
					   file_data = JSON.stringify(file_data, undefined, 2);
                  }
                  $scope.contents = file_data;
				  
			});
			
		} else {
			$scope.$apply(function() {
                $scope.contents = 'This is a directory.';
            });
		}
		
	} );
	
}]);
	
})();

