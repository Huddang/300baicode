function bai8(a,b,c){
    const cv=a+b+c;
    const p=cv/2;
    const S=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    const R=(a*b*c)/(4*S);
    console.log(R.toFixed(3));

}
bai8(2,3,4)