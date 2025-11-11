const rows = 6;
const cols = 15;

// Duyệt từng dòng
for (let i = 1; i <= rows; i++) {
  let line = '';

  // === DÒNG ĐẦU HOẶC CUỐI: in toàn bộ * ===
  if (i === 1 || i === rows) {
    for (let j = 1; j <= cols; j++) {
      line += '*';
    }
  }
  // === CÁC DÒNG GIỮA: in * đầu, khoảng trắng giữa, * cuối ===
  else {
    line += '*';  // cột đầu
    for (let j = 2; j <= cols - 1; j++) {
      line += ' ';  // các cột giữa
    }
    line += '*';  // cột cuối
  }

  console.log(line);
}