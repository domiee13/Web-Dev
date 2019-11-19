//Node module co

var fs = require('fs');
var co = require('co');
function readFilePromise(path){
	return new Promise(function(resolve,reject){
		fs.readFile(path,{encoding : 'utf8'},function(err,data){
			if(err!==null) reject(err);
			else resolve(data);
		});
	});
}

//Cach dung 1
co(function*(){ //Generator function
	var song1 = yield readFilePromise('song1.txt');
	var song2 = yield readFilePromise('song2.txt');
	var song3 = yield readFilePromise('song3.txt');
	console.log(song1,song2,song3);
})

//Cach dung 2
co(function*(){
	// var song1 = yield readFilePromise('song1.txt');
	// var song2 = yield readFilePromise('song2.txt');
	// var song3 = yield readFilePromise('song3.txt');

	// Co the cho het du lieu vao 1 mang nhu nay
	var values = yield [
		readFilePromise('song1.txt'),
		readFilePromise('song1.txt'),
		readFilePromise('song3.txt')
	]
	return values;
}).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log(error);
});

//module co lam cho lap trinh bat dong bo nhin nhu lap trinh dong bo

var readFile = co.wrap(function*(files){
	var values = yield files.map(function(file){
		return readFilePromise(file);
	});
	return values;
});

readFile(['song1.txt','song2.txt','song3.txt'])
	.then(function(data){
		console.log(data);
	})

// Promise.all([
// 	readFilePromise('song1.txt'),
// 	readFilePromise('song2.txt'),
// 	readFilePromise('song3.txt')
// ]).then(function(data){
// 	console.log(data);
// });

// //Cach trau bo

// readFilePromise('song1.txt')
// 	.then(function(song1){
// 		console.log(song1);
// 		return readFilePromise('song2.txt');

// 	})
// 	.then(function(song2){
// 		console.log(song2);
// 		return readFilePromise('song3.txt');

// 	})
// 	.then(function(song3){
// 		console.log(song3);
// 	});