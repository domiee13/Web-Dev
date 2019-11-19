var h = null;
var m = null;
var s = null;
var timeout = null;


function start(){
    if(h===null){
        h = parseInt(document.getElementById("hours").value);
        m = parseInt(document.getElementById("min").value);
        s = parseInt(document.getElementById("sec").value);

    }


    if(s==-1){
        m--;
        s = 59;
    }
    if(m ==-1){
        h--;
        m = 59;
    }
    if(h==-1){
        clearTimeout(timeout);
        alert("Time fucking outttt !!!!");
        return false;
    }
    document.getElementById("h").innerHTML = h.toString();
    document.getElementById("m").innerHTML = m.toString();
    document.getElementById("s").innerHTML = s.toString();

    timeout = setTimeout(function(){
        s--;
        start();

    },1000);
}
var button_start = document.getElementById("start");     
var button_stop = document.getElementById("stop");

button_start.onclick = function(){
    start();
}

button_stop.onclick = function(){
    clearTimeout(timeout);
}
