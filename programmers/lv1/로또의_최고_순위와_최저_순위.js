function solution(lottos, win_nums) {
  const 순위 = [6, 5, 4, 3, 2];
  const 지운번호 = lottos.filter((e) => !e).length ?? 0;
  const 지운번호를제외한_정답 = lottos.filter((e) =>
    win_nums.includes(e)
  ).length;
  return [
    순위.indexOf(지운번호를제외한_정답 + 지운번호) + 1 || 6,
    순위.indexOf(지운번호를제외한_정답) + 1 || 6,
  ];
}

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
