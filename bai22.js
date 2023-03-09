//viet vhuowng trinh nhap so KW/h 1 thang, tinh tien 1 thang

function bai22(n) {
    if (0<=n <50){
        console.log(n*600);
     } else if (n>50){
        console.log((50*600)+(n-50)*800);
     } else if (n<100){
        console.log((50*600)+(50*800)+(n-50-50)*1100);
     } else  {
        console.log((50*600)+(50*800)+(100*1100)*1500);
     }
    return;
} 
 bai22(40);