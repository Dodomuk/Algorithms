function solution(n, lost, reserve) {
  const obj = {};
  for (let index = 1; index <= n; index++) {
    let myCloth = 1;
    if (lost.indexOf(index) > -1) {
      myCloth--;
    }
    if (reserve.indexOf(index) > -1) {
      myCloth++;
    }
    obj[index] = myCloth;
  }

  for (let index = 1; index <= n; index++) {
    if (!obj[index]) {
      if (obj[index - 1] === 2) {
        obj[index]++;
        obj[index - 1]--;
      } else if (obj[index + 1] === 2) {
        obj[index]++;
        obj[index + 1]--;
      }
    }
  }

  return Object.values(obj).filter((e) => e).length;
}

// 좋아요 👍🏼
// function solution(n, lost, reserve) {
//   return (
//     n -
//     lost.filter((a) => {
//       const b = reserve.find((r) => Math.abs(r - a) <= 1);
//       if (!b) return true;
//       reserve = reserve.filter((r) => r !== b);
//     }).length
//   );
// }

console.log(solution(5, [3, 5], [2, 4], 5));
console.log(solution(5, [2, 4], [3], 4));
console.log(solution(3, [3], [1], 2));
