function kiemtrasnt(n){
    if(n<2) return false;
    else{
        for(var i = 2;i<=Math.sqrt(n);i++){
            if(n%i==0) {
                return false;
                break;
            }
        }
    }
    return true;
}

console.log(kiemtrasnt(2));
console.log(kiemtrasnt(6));
console.log(kiemtrasnt(5));
console.log(kiemtrasnt(4))