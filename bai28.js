function bai28(n){
    let tong = 0;
    for (var i = 1; i <= n; i++){
        if ( n % i === 0 ){
            tong++ 
        }
    }
    console.log(tong);
}
bai28(13);