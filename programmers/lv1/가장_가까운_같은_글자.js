function solution(s) {
  const map = new Map();
  return s.split('').map((e, index) => {
    const res = map.has(e) ? index - map.get(e) : -1;
    map.set(e, index);
    return res;
  });
}

// 좋아요 👍🏼
// function solution2(s) {
//   const hash = {};

//   return [...s].map((v, i) => {
//     let result = hash[v] !== undefined ? i - hash[v] : -1;
//     hash[v] = i;
//     console.log(hash);
//     return result;
//   });
// }

console.log(solution2('banana'));
