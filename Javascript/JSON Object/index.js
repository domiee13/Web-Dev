var myDog = {
	color: "white",
	name : "bull"
}

console.log(myDog);

var myDogString = JSON.stringify(myDog);
console.log(myDogString);

function Dog(name,color){
	this.name = name;
	this.color = color;

};
