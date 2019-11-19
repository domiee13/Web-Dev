//require cac module 
var readlineSync = require('readline-sync');
var fs = require('fs');
// Khai bao mang du lieu
var students = [];

//Khai bao doi tuong students 
function Student(name,age){
	this.name = name;
	this.age = age;
}
// Ham hien thi menu 
function showMenu(){
	console.log("1.Show all students");
	console.log("2.Create a new student");
	console.log("3.Save and exit");
	var option = readlineSync.question("> ");
	switch(option){
		case '1':
			showAllStudents();
			showMenu();
			break;
		case '2':
			showCreateStudent();
			showMenu();
			break;
		case '3':
			saveAndExit();
			break;
		default:
			console.log("Wrong option");
			showMenu();
			break;
	}
}

//ham load du lieu tu file json 
function loadData(){
	var fileContent = fs.readFileSync('./data.json');
	students = JSON.parse(fileContent);
}

//Ham hien thi toan bo hoc sinh	
function showAllStudents(){
	for(var student of students){
		console.log(student.name, student.age);
	}
}
// Ham tao them 1 hoc sinh
function showCreateStudent(){
	var name  = readlineSync.question("What's student's name?\n> ");
	var age = readlineSync.question("How old is student?\n> ");
	newStudent = new Student(name,age);
	students.push(newStudent);
}
//ham sava va thoat chuong trinh
function saveAndExit(){
	var data = JSON.stringify(students);
	fs.writeFileSync('./data.json',data,{encoding: 'utf8'});
}


function main(){
	loadData();
	showMenu();
};

main();
