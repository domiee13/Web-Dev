/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms VÀ trả về 1 promise để có thể gọi như sau
 */

var fs = require('fs');

function doAfter(fn, ms) {
  var promise = new Promise(function(resolve, reject){  // trả về promise
    setTimeout(function(data){ // dùng setTimeout sau 1s và thêm 1 arg để resolve
      fn(); // fn() này chính là bạn cho chạy hàm sayHello() // không thì bạn chỉnh lại là sayHello() đều đúng 
      // fn() hay sayHello() đều đúng
      resolve(data); // sau khi resolve cái data này thì nó sẽ truyền xuống function trong then() của bạn là hàm sayGoodbye 
    }, 1000)
  });
  return promise;
}

function sayHello() {
  console.log('Hello');
}

function sayGoodbye() {
  console.log('Goodbye');
}

doAfter(sayHello, 1000)
  .then(sayGoodbye); // function trong then() của bạn là đây 
// Expect: 
// Đợi 1s
// Hello
// Goodbye

