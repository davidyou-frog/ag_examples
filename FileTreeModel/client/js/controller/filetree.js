(function(){
'use strict';

var mainApp = angular.module('mainApp'); 
mainApp.controller('filetreeCtrl', 
[ '$scope','$element','FileTree', 'LoopBackResource', 
function ($scope,$element,FileTree,Resource) {

    $scope.title = 'server directory';
	
    var config = {}; config.core = {};
	
	config.core.data = function (node, cb) {
        console.log( 'call jstree data function' );
        console.log( 'node = ', node );
		
		FileTree.nodes( { id : node.id }).$promise.then(function ( value,responseHeaders) {
			console.log( 'value = ', value );
			cb.call(this, value.nodes );
		} );
		
	}
	
	this.tree = $( ".filetree" ).jstree(config);
	
}]);
	
})();

