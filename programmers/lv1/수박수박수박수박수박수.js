function solution(n) {
  return Array(Math.ceil(n / 2))
    .fill('수박')
    .join('')
    .substring(0, n % 2 ? n : n + 1);
}
0;

console.log(solution(1));
