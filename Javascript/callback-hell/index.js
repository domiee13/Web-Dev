var fs = require('fs');

// var song1 = fs.readFileSync('song1.txt',{encoding : 'utf8'});
// var song2 = fs.readFileSync('song2.txt',{encoding : 'utf8'});
// var song3 = fs.readFileSync('song3.txt',{encoding : 'utf8'});

// console.log(song1, song2, song3);

fs.readFile('./song1.txt',{encoding : 'utf8'}, function(err,song1){
	console.log(song1);
	fs.readFile('./song2.txt',{encoding : 'utf8'}, function(err,song2){
		console.log(song2);
		fs.readFile('./song3.txt',{encoding : 'utf8'}, function(err,song3){
			console.log(song3);
		});
	});
});