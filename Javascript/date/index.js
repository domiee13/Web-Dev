//date
//moment.js
var moment = require('moment');
var now = new Date();
var myBirthday = new Date(2000, 8 ,12);//13/9/2000 === 12/8/2000 month index = 0 - 11, day : 0 - 30
// console.log(now);
// console.log(myBirthday);
//Number of millisecond from 1-1-1970
console.log(now.getTime());
console.log(myBirthday.getTime());

var now = moment('2019-10-17 07:00');
console.log(now.fromNow());
console.log(now.format('DD/MM/YYYY'));