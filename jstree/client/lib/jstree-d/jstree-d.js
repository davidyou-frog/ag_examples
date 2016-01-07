/*
 * jstree.d [http://www.jstree.com]
 * 
 * http://arvindr21.github.io/jsTree-Angular-Directive
 *
 * Copyright (c) 2015 David You
 * Licensed under the MIT license.
 */
 
var jsTreed = angular.module('jsTree.d', []);

jsTreed.directive('jsTreeD', [ function() {
return {
    restrict: 'EA',
	link: function(scope, element, attrs, controller) {
		console.log( 'directive link is called' );
	     
        config = { 
		    'core' : {
				'data' : [
				    { "id" : "1", "parent" : "#", "text" : "Simple root node" },
				]
			}
		};
		
		this.tree = $(element).jstree(config);
	}	
}
}]);

