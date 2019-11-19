
var users = [{name: 'admin dep trai', age: 19}]; 
console.log(users);
//addUser
//Define a user
function User(name,age){
	this.name = name;
	this.age = age;
}


function addMember(){
	var nameInput = document.getElementById('user-name');
	var ageInput = document.getElementById('user-age');
	var name = nameInput.value;
	var age = parseInt(ageInput.value);
	var newUser = new User(name,age);
	users.push(newUser);
	console.log(users);
}

