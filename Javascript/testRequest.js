var request = require('request');

console.time();
request('https://randomuser.me/api/',function(error,response,body){
	console.log(body);
});

console.timeEnd();