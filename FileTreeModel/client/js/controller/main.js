'use strict';

/**
 * @ngdoc function
 * @name mainApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the mainApp
 */
var mainApp = angular.module('mainApp'); 
mainApp.controller('mainCtrl', [ '$scope', function ($scope) {

    $scope.splitterSettings = { width : '100%', 
	                            height : '519', 
	                            panels: [{ size: '300px' } ],
							   };
	
}]);  
  