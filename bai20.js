function bai20(n) {
    if(n <= 1000000 & n % 1000 === 0){
        let k5 = Math.floor(n/5000);
        let k2 = Math.floor((n - (k5 *5000))/2000);
        let k1 = Math.floor((n - (k5 *5000) - (k2 *2000))/1000);
     console.log(k5,k2,k1);
    } else {
        return ;
    }
}

bai20(43000); 