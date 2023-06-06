function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

// 좋아요 👍🏼 (전개 연산자를 통한 split 처리)
// const solution = (n) => {
//   return parseInt([...n.toString(3)].reverse().join(''), 3);
// };
