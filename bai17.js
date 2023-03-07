function bai18
let month = prompt("Nhập một tháng (tây)");
let season;
switch (Number(month)) {
  case 2:
  case 3:
  case 4:
    season = "Xuân";
    break;
  case 5:
  case 6:
  case 7:
    season = "Hạ";
    break;
  case 8:
  case 9:
  case 10:
    season = "Thu";
    break;
  case 11:
  case 12:
  case 1:
    season = "Ðông";
    break;
  default:
    season = "Tháng không hợp lệ";
}
console.log(`Tháng ${month} thuộc mùa ${season}`);