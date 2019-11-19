/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(day){
 	var check = new Date(day);
 	// Sunday - Saturday : 0 -6
 	return check.getDay() == 0 || check.getDay()==6;
} 

console.log(isWeekend('2019/10/12'));