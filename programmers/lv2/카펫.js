function solution(brown, yellow) {
  const totalBlock = brown + yellow;
  const set = new Set();
  set.add(1);
  set.add(totalBlock);
  for (let index = 2; index <= totalBlock / 2; index++) {
    if (totalBlock % index === 0) {
      set.add(index);
    }
  }
  const arr = Array.from(set).sort((a, b) => a - b);
  if (arr.length % 2) {
    return [arr[Math.floor(arr.length / 2)], arr[Math.floor(arr.length / 2)]];
  } else {
    for (let index = 0; index < arr.length / 2; index++) {
      if (
        yellow ===
        (arr[arr.length / 2 + index] - 2) *
          (arr[arr.length / 2 - (index + 1)] - 2)
      ) {
        return [arr[arr.length / 2 + index], arr[arr.length / 2 - (index + 1)]];
      }
    }
  }
}
// [4, 3]
// [3, 3]
// [8, 6]
console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));

// 좋아요 👍🏼
// function solution(brown, yellow) {
//   const x = (brown - 12) * 0.5;
//   const y = yellow - brown + 8;
//   const i = (8 + x + Math.sqrt(Math.pow(x, 2) - 4 * y)) * 0.5;
//   const j = (8 + x - Math.sqrt(Math.pow(x, 2) - 4 * y)) * 0.5;
//   console.log(i);

//   var answer = [i, j];
//   return answer;
// }
