let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const n = Number(input[0].split(' ')[0]); // 필요 갯수
  const packageList = []; // 6개 묶음
  const pieceList = []; // 낱개
  input.slice(1).forEach((e) => {
    const arr = e.split(' ');
    packageList.push(Number(arr[0]));
    pieceList.push(Number(arr[1]));
  });
  let result = 0;

  if (n >= 6) {
    // 가장 싼 묶음 우선 합
    result +=
      [...pieceList.map((e) => e * 6), ...packageList].sort(
        (a, b) => a - b
      )[0] * ~~(n / 6);
  }

  result += [...packageList, pieceList.sort((a, b) => a - b)[0] * (n % 6)].sort(
    (a, b) => a - b
  )[0];

  console.log(result);
}

console.log(solution(['10 3', '20 8', '40 7', '60 4']));
console.log(solution(['15 1', '100 40']));
console.log(solution(['17 1', '12 3']));
console.log(solution(['7 2', '10 3', '12 2']));
console.log(
  solution([
    '9 16',
    '21 25',
    '77 23',
    '23 88',
    '95 43',
    '96 19',
    '59 36',
    '80 13',
    '51 24',
    '15 8',
    '25 61',
    '21 22',
    '3 9',
    '68 68',
    '67 100',
    '83 98',
    '96 57',
  ])
);
