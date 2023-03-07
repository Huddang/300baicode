function bai15(a,b,c){
    if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Day khong phai la 3 canh cua mot tam giac");
  } else if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Day khong phai la 3 canh cua mot tam giac");
  } else {
    console.log("Day la 3 canh cua mot tam giac");
    const chuVi = a + b + c;
    const p = chuVi / 2;
    const dienTich = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(chuVi.toFixed(2), dienTich.toFixed(1));
  }

}
 bai15(1,2,3);