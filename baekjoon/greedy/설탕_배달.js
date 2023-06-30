function solution(n) {
  let index = ~~(n / 5);
  for (let idx = index; idx >= 0; idx--) {
    if ((n - 5 * idx) % 3 === 0) {
      return idx + (n - 5 * idx) / 3;
    }
  }
  return -1;
}

console.log(solution(11));
