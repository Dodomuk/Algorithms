// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const n = Number(input[0]);
// const p = input[1].split(' ').map(e => Number(e));

const n = 5;
const p = [3, 1, 4, 3, 2];

const res = p
  .sort((a, b) => a - b)
  .reduce((acc, cur, index) => acc + cur * (n - index), 0);

console.log(res);
