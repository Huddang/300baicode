function bai31(m,n){
    if (m<n){
        let num = 0;
        for ( var i = m ; i<n ; i++){
            console.log(i)
            if (i % 3 === 0){
                num++
            }
        }
        console.log(num);



    } return;
}
bai31(21,31);