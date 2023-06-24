function solution(n, origin = n) {
  n++;
  if (
    origin.toString(2).replaceAll('0', '').length ===
    n.toString(2).replaceAll('0', '').length
  ) {
    return n;
  } else {
    return solution(n, origin);
  }
}

// 좋아요 👍🏼
// function solution(n,a=n+1) {
//   return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
// }

console.log(solution(78));
