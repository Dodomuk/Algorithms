function solution(n) {
  return parseInt(
    (n + '')
      .split('')
      .map((e) => parseInt(e))
      .sort((a, b) => b - a)
      .join('')
  );
}
