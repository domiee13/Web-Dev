var fs = require('fs');
var co = require('co');

function readFile(path){
	return new Promise(resolve,reject){
		fs.readFile(path,{encoding: 'utf8'}, function(err,data){
			if(err!==null) reject(err);
			else resolve(data);
		});
	}
}

var readAllFile = co.wrap(function*(paths){
	var data = yield paths.map(function(path){
		return readFile(path);
	});
});

readAllFile(paths).then(function(data){
	console.log(data);
});