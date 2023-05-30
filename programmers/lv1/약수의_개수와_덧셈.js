function solution(left, right) {
  let res = 0;
  for (let x = left; x <= right; x++) {
    let cnt = 0;
    for (let y = 1; y <= x; y++) {
      if (x % y === 0) {
        cnt++;
      }
    }
    res += x * (cnt % 2 ? -1 : 1);
  }
  return res;
}

// 좋아요 👍🏼 (***** 숫자의 제곱근이 정수인 경우 약수의 개수는 '홀수'이다)
// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }
