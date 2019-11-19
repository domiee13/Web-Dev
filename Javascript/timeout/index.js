console.log('Start');
setTimeout(function(){
	console.log('Finish');
},1000);

console.log('Done');


function display(){
	console.log('Hello motherfucker');
}

var timeoutId = setTimeout(display,2000); // Chi can truyen ten ham
clearTimeout(timeoutId); // Clear Timeout khi chua chay xong thi se khong thuc hien ham nua