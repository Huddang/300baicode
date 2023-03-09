function bai19(a,b,c,d,e){
    const x = (a+b+c+d+e)% 10 ; // 24
    if ( x === 9 ){
        console.log(Math.floor(x) + "\n" + "may man");
    } else if ( x !== 9 ){
        console.log(Math.floor(x) + "\n" + "khong may man");
    }
}
bai19(2,5,4,8,5)