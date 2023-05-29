function solution(n) {
  return String(n)
    .split('')
    .map((e) => Number(e))
    .reverse();
}

// 좋아요 👍🏼
// function solution(n) {
//     // 숫자풀이
//     var arr = [];

//     do {
//         arr.push(n%10); // 10으로 나눈 나머지 값은 첫번째 자리의 숫자만 리턴됨
//         n = Math.floor(n/10); // 10 으로 나눈 후 내림처리 할 경우 1의 자리 수를 제외한 나머지 숫자를 받게 됨
//     } while (n>0);

//     return arr;
// }
