var path = require('path');
var fs   = require('fs');

var loopback = require('loopback');

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

		if( node_id === '#' ) {
		
		    var ctx = loopback.getCurrentContext();
            var currentUser = ctx && ctx.get('currentUser');
			var path_name = currentUser.rootPath + currentUser.email;
			path_name = path_name.replace( /@/gi, "_");
			
			path_name = path.resolve( path_name );
			
			if ( !fs.existsSync( path_name )) { 
				 fs.mkdirSync(path_name);
            } 
			
//			node_id = path.resolve(__dirname, '../../', 'node_modules');
            node_id = path_name;
		}
		
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
	
    FileTree.file = function( node_id, cb) {
		
		var contents = "";
		
		contents = fs.readFileSync( node_id, 'UTF-8')
		
		cb(null, contents );

	}
	
    FileTree.remoteMethod (
        'file',
        {
          http: {path: '/file', verb: 'get'},
          accepts: {arg: 'id', type: 'string',  required: true, http: { source: 'query' } },
          returns: {arg: 'contents', type: 'string'}
        }
    );
	
};

