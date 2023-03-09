function bai25(n){
    let tong = 0;
    for ( var i = 1; i <= n; i++){
        if ( i % 2 === 0 ){
            tong = tong + i
        }
    }
    console.log(tong);
}
bai25(13);