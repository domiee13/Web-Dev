function Dog(name,color){
	this.name = name;
	this.color = color;
	this.dead = false;
};

Dog.prototype.age = 3;

var bull = new Dog('Bull','Black');
console.log(bull.age);//Console log ra duoc nhung console object thi khong ra ?
console.log(bull);

for(var i in bull){
	console.log(i);
}

function Cat(name,color){
	this.name = name;
	this.color = color;
	this.stomap = [];
}

Cat.prototype.eat = function (a){
	this.stomap.push(a);
	//Them cai dieu kien chet o day tot hon ?
}

Cat.prototype.info = function(){
	this.dead = false;
	if(this.stomap.length>=3) this.dead = true;
	if(this.dead) console.log("Ur cat died");
};

var tom = new Cat("Tom",12);
console.log(tom);

for(var i = 0;i<5;i++){
	tom.eat("mouse"+i);
	console.log(tom.stomap);
	tom.info();
}