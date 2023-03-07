function bai12(a){
    const HCSD=Math.floor(a / 10);
    const HCSC=a % 100;
    if (HCSD === 0){ HCSD= '00';}
    if (HCSC === 0){ HCSC= '00';}
    console.log(`${HCSD} ${HCSC}`);
}
bai12(673)




