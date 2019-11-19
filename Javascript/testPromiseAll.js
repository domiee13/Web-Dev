/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */
var axios = require('axios');
var url1 = 'https://jsonplaceholder.typicode.com/todos/1';
var url2 = 'https://jsonplaceholder.typicode.com/todos/2';
var url3 = 'https://jsonplaceholder.typicode.com/todos/3';

function readContent(url){
  return new Promise(function(resolve,reject){
    axios.get(url).then(function(response){
         resolve(response.data);
    });
  });
}

Promise.all([
  readContent(url1),
  readContent(url2),
  readContent(url3)
]).then(function(data){
  console.log(data);
});