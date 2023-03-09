function bai32(m,n){
    if (m<n){
        let tong = 0;
        let num = 0;
        for ( var i = m; i <= n; i++){
            //console.log(i);
            if ( i % 3 === 0 || i % 5 === 0){ 
               num++
        
            } if ( i % 2 === 0){
                tong = tong + i
            }
        } console.log(num,tong);

    } 
}
bai32(21,31);