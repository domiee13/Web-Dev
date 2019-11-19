function Cat(name,color){
	this.name = name;
	this.color = color;
	this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
	// body...
	this.stomach.push(mouse);
	mouse.dead = true;
};

function Mouse(name,color){
	this.name = name;
	this.color = color;
	this.dead = false;
}


var tom = new Cat('Tom',"Gray");
var jerry = new Mouse('Jerry',"Brown");

tom.eat(jerry);

console.log(tom);
console.log(jerry);