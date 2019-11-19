var chatLog = document.getElementById('messenger');

var text = document.getElementById('inputMess');

//Load du lieu tin nhan
var url = 
axios.get()
//Hien thi tin nhan
function display(data){
	
	var content = "";
	content  = data.map(function(item){
		return '<p>' + "admin dep trai: " + item + '</p>';
	});
	chatLog.innerHTML = content.join("");
	text.value = "";
}
//Them tin nhan moi
function addMess(){
	var data = text.value;
	messData.push(data);//Them tin nhan vao mang du lieu
	//Cap nhat du lieu tin nhan vao trong bo nho
	localStorage.setItem(storageKey,JSON.stringify(messData));
	//Hien thi tin nhan moi
	display(messData);

}
function clearChatLog(data){
	//Gan du lieu tin nhan bang rong
	messData = [];
	//Cap nhat lai bo nho
	localStorage.setItem(storageKey,JSON.stringify(messData));
	//Hien thi lai chat log
	display(messData);
}
//Neu khong nhap gi van hien thi cac tin nhan cu
display(messData);


