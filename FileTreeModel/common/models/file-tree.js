module.exports = function(FileTree) {

    FileTree.nodes = function( node_id, cb) {
		console.log( 'Call FileTree.nodes remote method - node_id = ', node_id );
		var nodes  = { "id" : "1", "parent" : "#", "text" : "Simple root node" };
		cb(null, nodes );
	}

    FileTree.remoteMethod (
        'nodes',
        {
          http: {path: '/nodes', verb: 'get'},
          accepts: {arg: 'id', type: 'string',  required: true, http: { source: 'body' } },
          returns: {arg: 'nodes', type: 'object'}
        }
    );
  
};
