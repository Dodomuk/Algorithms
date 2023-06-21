function solution(n) {
  if (n === 1) return 1;
  let res = n % 2 ? 2 : 1;
  for (let index = 1; index < Math.ceil(n / 3); index++) {
    let acc = index;
    let num = index;
    while (acc < n) {
      num++;
      acc += num;
    }
    if (acc === n) res++;
  }

  return res;
}

// 좋아요 👍🏼 (홀수인 약수의 개수를 구하면 된다!!!)
// function expressions(num) {
//     var answer = 0;
//     for (var i = 1; i <= num; i++) {
//         if ((num % i == 0) && (i % 2 == 1)) {
//             answer++;
//         }
//     }
//     return answer;
// }

console.log(solution(15));
