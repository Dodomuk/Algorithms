function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((x, idx) => (idx + 1) * x);
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
