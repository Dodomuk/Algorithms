function solution(n) {
  for (let index = 1; index < n; index++) {
    if (n % index === 1) {
      return index;
    }
  }
}

// 좋아요 👍🏼
// function solution(n, x = 1) {
//     while (x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }
// }
