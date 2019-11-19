/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

var axios = require('axios');
var url1 = 'https://jsonplaceholder.typicode.com/todos/1';
var url2 = 'https://jsonplaceholder.typicode.com/todos/2';

function getData(){
  var a = axios.get(url1).then(function(response){
    console.log(response.data);
  }).catch(function(err){
    console.log(err);
  });
  var b = axios.get(url2).then(function(response){
    console.log(response.data);
  }).catch(function(err){
    console.log(err);
  });
  return a,b;
}

getData();