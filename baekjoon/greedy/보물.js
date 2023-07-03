// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 정리
const n = Number(input[0]);
let a = input[1].split(' ').map((v) => Number(v));
let b = input[2].split(' ').map((v) => Number(v));

a = a.sort((a, b) => a - b);
b = b.sort((a, b) => b - a);

console.log(a.reduce((acc, cur, idx) => acc + cur * b[idx], 0));
