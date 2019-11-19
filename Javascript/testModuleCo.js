/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];
var axios = require('axios');
var co = require('co');
// Cách 1: Sử dụng vòng lặp for
function getData(url){
	axios.get(url).then(function(response){
		console.log(response.data);
	}).catch(function(err){
		console.log(err);
	});
}

for(var url of urls){
	getData(url);
}
// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise

function getDataPromise(url){
	return new Promise(function(resolve,reject){
		axios.get(url).then(function(response){
			resolve(response.data);
		}).catch(function(err){
			console.log(err);
		});	
});
}

var getAllData = co.wrap(function*(urls){
	var data = yield urls.map(function(url){
		return getDataPromise(url);
	});
	return data;
});

getAllData(urls).then(function(data){
	console.log(data);
});
