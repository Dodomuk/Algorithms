function solution(a, b, n) {
  if (n < a) {
    return 0;
  }
  const sum = Math.floor(n / a) * b;
  return sum + solution(a, b, (n % a) + sum);
}

// 좋아요 👍🏼
//solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b
