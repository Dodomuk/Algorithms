function solution(a, b) {
  return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
}

console.log(solution([-1, 0, 1], [1, 0, -1]));
