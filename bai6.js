function bai6(a,b,c){
    const cv=a+b+c;
    const p=cv/2;
    const s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log(cv.toFixed(0),s.toFixed(3));

}
bai6(2,3,4)