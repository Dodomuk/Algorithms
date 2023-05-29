function solution(a, b) {
  const [min, max] = a < b ? [a, b] : [b, a];
  let res = 0;
  for (let index = min; index < max + 1; index++) {
    res += index;
  }
  return res;
}

// 좋아요 👍🏼 (가우스의 등차수열 사용)
// function adder(a, b){
//     var result = 0
//     //함수를 완성하세요
//     return (a+b) * (Math.abs(a-b)+1) / 2;
// }

// 좋아요 👍🏼 (math 함수 활용)
// function adder(a, b, s = 0){
//     for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
//     return s;
//   }
