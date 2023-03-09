function bai29(n){
    let num = 0;
    for( var i = 1; i <= n; i++){
        if ( n % i === 0 ){
            num++
        }
    }
    if (num === 2){
        console.log ("Yes");
    } else {
        console.log ("No");
    }
}
bai29(13)