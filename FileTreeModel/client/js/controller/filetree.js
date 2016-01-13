(function(){
'use strict';

var mainApp = angular.module('mainApp'); 
mainApp.controller('filetreeCtrl', [ '$scope','$element', function ($scope,$element) {

    $scope.title = 'server directory';
	
    var config = { 
    		    'core' : {
    				'data' : [
    				    { "id" : "1", "parent" : "#", "text" : "Simple root node" },
    				]
    			}
    		};
			
	this.tree = $( ".filetree" ).jstree(config);
	
}]);
	
})();
