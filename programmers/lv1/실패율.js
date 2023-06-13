function solution(N, stages) {
  let arr = [];
  stages = stages.sort((a, b) => a - b);

  for (let index = 1; index <= N; index++) {
    const 플레이어수 = stages.filter((e) => e === index).length;
    const 스테이지_플레이어수 = stages.length;
    stages.splice(0, 플레이어수);
    arr.push([index, 플레이어수 / 스테이지_플레이어수]);
  }
  return arr.sort((a, b) => b[1] - a[1]).map((e) => e[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
