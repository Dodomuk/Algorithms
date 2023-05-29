function solution(num, cnt = 0) {
  if (num === 1) return cnt;
  cnt++;
  num = num % 2 ? num * 3 + 1 : num / 2;
  if (num === 1) return cnt;
  if (cnt === 500) return -1;
  return solution(num, cnt);
}

console.log(solution(1));
