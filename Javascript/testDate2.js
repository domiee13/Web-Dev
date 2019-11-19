/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
var diff = function(a,b){
	var dateA = new Date(a);
	var dateB = new Date(b);
	return parseInt((dateB - dateA)/(24*3600*1000));
}

console.log(diff('2019/10/12','2019/10/20'));