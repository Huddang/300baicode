function bai13(a,b,c){
    if (a === b & b === c) {
        console.log("=");
    } else if (a>c & a>b) {
        console.log(a);
    } else if (b>a & b>c) {
        console.log(b);
    } else {
        console.log(c);
    }
    const arr = [13,3,4,5,6]
    var min = 0;
    for (i =0; i < arr.length; i++) {
        if (arr[i] > min) {
            min = arr[i];
        }
    }
    console.log(min);
}
bai13(6,7,3);