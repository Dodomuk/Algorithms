function solution(n) {
  let res = n;
  const maxNum = Math.floor(n / 2) + 1;
  for (let index = 1; index < maxNum; index++) {
    if (Number.isInteger(n / index)) {
      res += index;
    }
  }
  return res;
}

console.log(solution(12));
console.log(solution(5));
