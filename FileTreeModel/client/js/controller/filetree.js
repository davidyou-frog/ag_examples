(function(){
'use strict';

var mainApp = angular.module('mainApp'); 
mainApp.controller('filetreeCtrl', [ '$scope','$element','FileTree', function ($scope,$element,FileTree) {

    $scope.title = 'server directory';
	
    var config = {}; config.core = {};
//	config.core.data = [
//	    { "id" : "1", "parent" : "#", "text" : "Simple root node" },
//	]
	
	config.core.data = function (node, cb) {
        console.log( 'call jstree data function' );
        console.log( 'node = ', node );
	    
	}
	
	
	
//    		    'core' : {
//    				'data' : [
//    				    { "id" : "1", "parent" : "#", "text" : "Simple root node" },
//    				]
//    			}
//    		};
			
//	config = { 
//	    	    'core' : {
//	    			'data' : function (node, cb) {
//    				    console.log( 'call jstree data function' );
//    					console.log( 'node = ', node );
//						
//						var R = Resource( '/api/file/tree', { id : node.id } );
//						R.query( function( node_data ) {
//							console.log( 'query /api/file/tree node data = ', node_data );
//							cb.call(this, node_data );
//						});
//    					
//    				}	
//                }
//	    		
//	    	};		
			
	this.tree = $( ".filetree" ).jstree(config);
	
}]);
	
})();
