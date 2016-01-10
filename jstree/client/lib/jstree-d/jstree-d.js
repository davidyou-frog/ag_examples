/*
 * jstree.d [http://www.jstree.com]
 * 
 * http://arvindr21.github.io/jsTree-Angular-Directive
 *
 * Copyright (c) 2015 David You
 * Licensed under the MIT license.
 */
 
var jsTreed = angular.module('jsTree.d', []);

jsTreed.directive('jsTreeD', 
    [         'LoopBackResource', 
	function( Resource              ) {
	return {
        restrict: 'EA',
	    link: function(scope, element, attrs, controller) {
	    	console.log( 'directive link is called' );
	         
            config = { 
	    	    'core' : {
	    			'data' : function (node, cb) {
    				    console.log( 'call jstree data function' );
    					console.log( 'node = ', node );
						
						var R = Resource( '/api/file/tree', { id : node.id } );
						R.query( function( node_data ) {
							console.log( 'query /api/file/tree node data = ', node_data );
							cb.call(this, node_data );
						});
    					
    				}	
                }
	    		
	    	};
	    
	    	this.tree = $(element).jstree(config);
	    }
    };
	
}]);

