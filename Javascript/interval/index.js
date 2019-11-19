//setInterval lap di lap lai sau 1 khoang thoi gian

var count = 0

var hello = function(){
	console.log("Hello thang ml");
}

setInterval(hello,1000);

var intervalId = setInterval(function(){
	count++;
	console.log(count);
	if(count == 20) clearInterval(intervalId);
},1000);