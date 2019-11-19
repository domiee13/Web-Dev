var addBtn = document.getElementById('addBtn');
var display = document.getElementById('display');
var inputName = document.getElementById('inputName');
var inputPhoneNum = document.getElementById('inputPhoneNum');
var searchBox = document.getElementById('search');

addBtn.addEventListener('click',addContact);
display.addEventListener('click',onClicked)
searchBox.addEventListener('keyup',function(){
	var val = searchBox.value;
	var foundList = contacts.filter(function(item){
		return item.name.includes(val);
	});
	if(foundList){
		render(foundList);
	}
	// else display.innerHTML = "Khong co ket qua";
	console.log(val);
});

function Contact(name,phoneNumber){
	this.name = name;
	this.phoneNumber = phoneNumber;
}

var contacts = [];
var storageKey = 'contacts';
var stringData = localStorage.getItem(storageKey);

if(stringData){
	contacts = JSON.parse(stringData);
}
else contacts = [];
console.log(contacts);

function onClicked(event){
	var button = event.target;
	var i = JSON.parse(button.dataset.id);
	// console.log(i);
	// console.log(button.dataset);
	contacts.splice(i,1);
	render(contacts);
	localStorage.setItem(storageKey,JSON.stringify(contacts));	
}

function addContact(){
	var name = inputName.value;
	var phoneNum = inputPhoneNum.value;
	var newContact = new Contact(name,phoneNum);
	contacts.push(newContact);
	inputName.value = "";
	inputPhoneNum.value = "";
	render(contacts);
	localStorage.setItem(storageKey,JSON.stringify(contacts));
	console.log(contacts);
}

function render(items){
	var content = "";
	content = items.map(function(item,index){
		return '<li id="item">' + item.name +' '+item.phoneNumber + '     <button id="deleteBtn" data-id='+index+'>DELETE</button>' + '</li>' ;
	});
	display.innerHTML = '<ul>' + content.join("") + '</ul>';
}

render(contacts);