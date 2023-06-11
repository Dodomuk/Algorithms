function solution(k, m, score) {
  let res = 0;
  score = score.sort((a, b) => b - a);
  for (let index = 0; index < Math.floor(score.length / m); index++) {
    res += score[m * (index + 1) - 1];
  }
  return res * m;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
