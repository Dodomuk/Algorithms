//🧐 다시 풀어보기
function solution(x, y) {
  const xArr = x.split('');
  const yArr = y.split('');
  let res = '';

  for (let index = 0; index < 10; index++) {
    const xCnt = xArr.filter((e) => parseInt(e) === index).length;
    const yCnt = yArr.filter((e) => parseInt(e) === index).length;
    res += String(index).repeat(Math.min(xCnt, yCnt));
  }

  if (!res) return '-1';
  if (!Number(res)) return '0';

  return res
    .split('')
    .sort((a, b) => Number(b) - Number(a))
    .join('');
}

console.log(solution('100', '2345'));
console.log(solution('100', '203045'));
console.log(solution('100', '123450'));
console.log(solution('12321', '42531'));
console.log(solution('5525', '1255'));
