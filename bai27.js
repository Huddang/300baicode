function bai27(n){
    let tong = 0;
    for (var i = 1; i < n; i++){
        if ( i % 3 === 0 || i % 5 === 0 ){
            tong = tong + i
        }
    }
    console.log(tong);
}
bai27(13);
