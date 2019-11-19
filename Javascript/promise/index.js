// var fs = require('promise-fs');

// fs.readFile('song1.txt',{encoding: 'utf8'})
//   .then(function(song1){
//   	console.log(song1);
//   })//Co the viet lien dong hoac xuong dong cho de nhin
//   .catch(function(err){
//   	console.log(err);
//   })

 //Doc nhieu file

 // function onDone(song){
 // 	console.log(song);
 // }

 // function onErr(err){
 // 	console.log(err);
 // }

 // function readFile(path){
 // 	return fs.readFile(path,{encoding :'utf8'});
 // }

 // readFile('song1.txt')
 // 	.then(onDone)
 // 	.then(function(){
	// 	return readFile('song2.txt');
	// })
 // 	.then(onDone).catch(onErr);


 var fs = require('fs');

 function readFilePromise(path){
 	return new Promise(function(resolve,reject){
 		fs.readFile(path,{encoding : 'utf8'},function(err,data){
 			if(err){
 				reject(err);	
 			}
 			else{
 				resolve(data);
 			}
 		});
 	});
 }
 	

 readFilePromise('song1.txt')
 	.then(function(song1){
 		console.log(song1);
 	})
 	.catch(function(error){
 		console.log(error);
 	});

// Doc nhieu file
 readFilePromise('song1.txt')
 	.then(function(song1){
 		console.log(song1);
 		return readFilePromise('song2.txt');
 	})
 	.then(function(song2){
 		console.log(song2);
 	});

 //Promise all
 Promise.all([
 	 readFilePromise('song1.txt'),
 	 readFilePromise('song2.txt')


 ]).then(function(values){
 	console.log(values);
 });