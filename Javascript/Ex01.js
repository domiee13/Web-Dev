var a = document.getElementById("input");
var res = document.getElementById("res")

function sum(){
    var sum = 0;
    for(var i = 0;i<parseInt(a.value);i++){
        sum += i;
    
    }
    res.innerHTML = "Sum = "+sum;
}

var button =document.getElementById("button");
button.onclick = function(){
    sum();
}