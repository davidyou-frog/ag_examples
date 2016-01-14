var path = require('path');
var fs   = require('fs');

module.exports = function(FileTree) {

    function getNode(node_id, filename) {
        var file_state = fs.statSync(path.join(node_id, filename));
    	
        return {
          "id": path.join(node_id, filename),
          "text": filename,
//          "icon" : file_state.isDirectory() ? 'jstree-custom-folder' : 'jstree-custom-file',
          "state": {
            "opened": false,
            "disabled": false,
            "selected": false
          },
          "li_attr": {
            "base": path.join(node_id, filename),
            "isLeaf": !file_state.isDirectory()
          },
          "children": file_state.isDirectory()
        };
    }
  
    FileTree.nodes = function( node_id, cb) {
		
		var nodes = [];

		if( node_id === '#' ) { // First Root Query
			node_id = path.resolve(__dirname, '../../', 'node_modules');
		}
		
		console.log( 'node_id = ', node_id  );
		
		fs.readdir(node_id, function (err, files) {
			for (var i = 0; i < files.length;i++) {
                nodes.push(getNode(node_id, files[i]));
            }
            cb(null, nodes ); 		
		});	
		
	}

    FileTree.remoteMethod (
        'nodes',
        {
          http: {path: '/nodes', verb: 'get'},
          accepts: {arg: 'id', type: 'string',  required: true, http: { source: 'query' } },
          returns: {arg: 'nodes', type: 'object'}
        }
    );
  
};
