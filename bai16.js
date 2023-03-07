function bai16(TBHKI , TBHKII) {
  const TBCN = ((TBHKI + TBHKII * 2) / 3).toFixed(1);

  let grade;
  if (TBCN >= 8) {
    grade = 'Gioi';
  } else if (TBCN >= 6.5) {
    grade = 'Kha';
  } else if (TBCN >= 5) {
    grade = 'Trung binh';
  } else if (TBCN >= 3.5) {
    grade = 'Yeu';
  } else {
    grade = 'Kem';
  }

  return `${TBCN}\n${grade}`;
}

console.log(bai16(8,9));