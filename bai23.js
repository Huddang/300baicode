function bai23(n){
    let result = "";
    let num = false;
    for (var i = 1; i < n; i++){
        if ( i % 3 === 0 ){
            result = result + i + " "
            num = true;
            console.log(num);
        }
    }
    if (num) {
        console.log(result);    
    } else {
        console.log("-");
    }
}
bai23(20)