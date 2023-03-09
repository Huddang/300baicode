function bai21(km) {
  if (km = 1){
  console.log(12000);
  }else if (km <= 30){
  console.log(12000 + (km - 1) * 10000);
  } else {
    console.log(12000 + 290000 + (km - 31) * 9000);
  }
  
  
  
 return ;
}
bai21(22);