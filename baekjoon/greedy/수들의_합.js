// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let s = Number(input[0]);
const s = 200;
let sum = 0;
let cnt = 0;
while (true) {
  cnt++;
  sum += cnt;
  if (sum > s) {
    console.log(cnt - 1);
    break;
  }
}
