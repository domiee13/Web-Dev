var button = document.getElementById('button');
var div = document.getElementsByTagName("div");


function change_color(){
    for(var i = 0;i<div.length;i++){
        if((i+1)%2==0){
            div[i].style.backgroundColor = "red";
        }
        else div[i].style.backgroundColor = "aqua";
    }
}

button.onclick = function(){
    change_color();
}