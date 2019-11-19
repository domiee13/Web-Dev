
function Mouse(color){
    this.color = color;
    this.dead = false;
}

Mouse.prototype.die = function(){
    this.dead = true;
}

function Cat(){
    this.stomach = [];
}

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
    mouse.die();
};

var mouse1 = new Mouse('black');
var mouse2 = new Mouse('Yellow');

console.log(mouse1);
console.log(mouse2);

var tom = new Cat;
tom.eat(mouse1);
console.log(tom.stomach);