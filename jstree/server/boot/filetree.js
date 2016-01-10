var path = require('path');
var fs   = require('fs');

module.exports = function(app) {
	
  function getNode(id_path, filename) {
    var file_state = fs.statSync(path.join(id_path, filename));
	
    return {
      "id": path.join(id_path, filename),
      "text": filename,
      "icon" : file_state.isDirectory() ? 'jstree-custom-folder' : 'jstree-custom-file',
      "state": {
        "opened": false,
        "disabled": false,
        "selected": false
      },
      "li_attr": {
        "base": path.join(id_path, filename),
        "isLeaf": !file_state.isDirectory()
      },
      "children": file_state.isDirectory()
    };
  }
  
  function sendReqWithList(id_path, res) {
    var resp = [];
	
    fs.readdir(id_path, function (err, files) {
	  if(err) {
	     console.log( err );
		 throw err;
	  }
		
      for (var i = 0; i < files.length;i++) {
        resp.push(getNode(id_path, files[i]));
      }
      res.json(resp);
    });
	
  }
  
  app.get('/api/file/tree', function(req, res) {
    var id_path;
	console.log( 'call get /api/file/tree' );
	console.log( 'req.query.id = ', req.query.id );
	
    if (req.query.id == '#') {
		
		id_path = path.resolve(__dirname, '../../', 'node_modules');
		sendReqWithList(id_path, res);
		
    } else {
      if (req.query.id) {
		  
        id_path = req.query.id;
        sendReqWithList(id_path, res);
		
      } else {
          res.json(['No valid data found']);
      }
    }
  });
  
   app.get('/api/file/contents', function(req, res) {
      res.send(fs.readFileSync(req.query.file_path, 'UTF-8'));
  });
  
  
}

