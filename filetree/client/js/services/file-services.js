(function(window, angular, undefined) {'use strict';

var module = angular.module("fileServices", []);

module.factory( "File", [ '$http', 
function( $http ) {
    var _factory = {};
 
      _factory.readContents = function(file_path) {
        return $http.get('/api/file/contents?file_path=' + encodeURIComponent(file_path));
      };
 
      return _factory;
}]
);

})(window, window.angular);
