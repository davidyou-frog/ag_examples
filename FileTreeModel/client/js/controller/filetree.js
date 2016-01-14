(function(){
'use strict';

var mainApp = angular.module('mainApp'); 
mainApp.controller('filetreeCtrl', 
[ '$rootScope','$scope','FileTree', 
function ($rootScope, $scope,FileTree) {

    $scope.title = 'server directory';
	
    var config = {}; config.core = {};
	
	config.core.data = function (node, cb) {
		
		FileTree.nodes( { id : node.id }).$promise.then(function ( value,responseHeaders) {
			cb.call(this, value.nodes );
		} );
		
	}
	
	this.tree = $( ".filetree" ).jstree(config)
	.on( "select_node.jstree", function(e, data) {
		$rootScope.$emit( "filetree:select_node", data );
	});
	
}]);
	
})();

