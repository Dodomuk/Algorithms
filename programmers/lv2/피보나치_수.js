// function solution(n) {
//   let f1 = 0;
//   let f2 = 1;
//   let f3 = f1 + f2;
//   for (let index = 0; index < n - 2; index++) {
//     f1 = f2;
//     f2 = f3;
//     f3 = ((f1 % 1234567) + (f2 % 1234567)) % 1234567;
//   }

//   return f3 % 1234567;
// }

// 좋아요 👍🏼
function solution(n) {
  var result = [0, 1];
  while (result.length !== n + 1) {
    var fibonacci =
      (result[result.length - 2] + result[result.length - 1]) % 1234567;
    result.push(fibonacci);
  }
  return result[n];
}

console.log(solution(1000000));
