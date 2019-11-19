var a = document.getElementById("input");
var res = document.getElementById("res");
var button =document.getElementById("button");


//Ham kiem tra so nguyen to

function isPrime(i){
    if(i<2) return false;
    else{
        for(var j = 2;j<=Math.sqrt(i);j++){
            if(i%j==0){
                return false;
                break;
            }
        }
    }
    return true;
}
function checkPrime(){
    var html = '';
    for(var i = 0;i<parseInt(a.value);i++){
       if(isPrime(i)) html += i +"</br>";
    }
    res.innerHTML = html;

}

button.onclick = function(){
    checkPrime();
}