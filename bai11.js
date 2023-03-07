function bai11(a) {
    
    const hours = Math.floor(a / 3600);
    const minutes = Math.floor((a % 3600) / 60);
    const seconds = a % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}

console.log(bai11(4010));