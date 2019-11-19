/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

function subtractDay(date,n){
	date = new Date(date);
	var res = date - n*3600*24*1000;
	//Tru ngay se mac dinh ra ms
	console.log(res);
	return new Date(res);
}

console.log(subtractDay('2019/10/12',8));

// var date = new Date('2019/10/20');
// console.log(date);
//TEST
var date = new Date('2019/10/21');//Neu khai bao kieu nay thi thang giu nguyen, ngay phai cong them 1
var time = date.getTime();
console.log(date);
var date2 = new Date(date.getTime());

console.log(date2)

//date va date2 deu ra cung ket qua