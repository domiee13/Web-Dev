var fs = require('fs');
var co = require('co');

function readFilePromise(path){
	return new Promise(function(resolve,reject){
		fs.readFile(path,{encoding: 'utf8'}, function(err,data){
			if(err!==null) reject(err);
			else resolve(data);
		});
	});
}


var readFile = co.wrap(function*(paths){
	var data = yield paths.map(function(path){
		return readFilePromise(path);
	});
	return data;
});

var paths = ['song1.txt','song2.txt','song3.txt'];

readFile(paths).then(function(value){
	console.log(value);
});