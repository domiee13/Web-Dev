var fs = require('fs');
var readlineSync = require('readline-sync');
var contacts = []

function Contact(name,phone){
	this.name = name;
	this.phone = phone;

}
function showMenu(){
	console.log("1.Nhap du lieu danh ba");
	console.log("2.Sua du lieu danh ba");
	console.log("3.Xoa du lieu");
	console.log("4.Tim kiem");
	console.log("5.Thoat");
	var option = readlineSync.question("> ");
	switch(option){
		case '1':
			createNewContact();
			showMenu();
			break;
		case '2':
			editContact();
			showMenu();
			break;
		case '3':
			deleteContact();
			showMenu();
			break;
		case '4':
			findContact();
			showMenu();
			break;
		case '5':
		default:
			break;
	}
}
function loadData(){
	var fileContent = fs.readFileSync('./danhba.json');
	contacts = JSON.parse(fileContent);
}

function createNewContact(){
	var name = readlineSync.question("Name: ");
	var phone = readlineSync.question("Phone Number: ");
	var newContact = new Contact(name,phone);
	contacts.push(newContact);
	//Cap nhat va luu danh ba
	update();
}

function update(){
	var content = JSON.stringify(contacts);
	fs.writeFileSync('./danhba.json',content,{encoding: 'utf8'});
}
function editContact(){
	var inp = readlineSync.question("Nhap ten hoac so dien thoai ban muon sua:\n> ");
	for(contact of contacts){
		if(contact.name === inp || contact.phone === inp){
			var option = readlineSync.question("Ban mua sua ten hay so dien thoai?\n1.Ten\n2.So dien thoai\n> ");
			switch(option){
				case '1':
					var newName = readlineSync.question("Ten moi: ");
					contact.name = newName;
					update();
					break;
				case '2':
					var newPhone = readlineSync.question("So dien thoai moi: ");
					contact.phone = newPhone;
					update();
					break;
			}
		}
		else console.log("Khong tim duoc du lieu");
	}
}

function deleteContact(){
	var done = 0;
	var inp = readlineSync.question("Nhap ten hoac so dien thoai ban muon xoa:\n> ");
	for(contact of contacts){
		if(contact.name === inp || contact.phone === inp){
			delete contacts[contacts.indexOf(contact)];
			update();
			console.log("Da xoa!");
			done = 1;
			break;
		}
	}
	if(done===0) console.log("Khong tim thay du lieu");
}

function findContact(){
	var inp = readlineSync.question("Nhap ten hoac so dien thoai ban muon xoa:\n> ");
	for(contact of contacts){
		if(contact.name === inp || contact.phone === inp){
			console.log(contact.name,contact.phone);
		}
	}
}

function main(){
	loadData();
	showMenu();
}

main();