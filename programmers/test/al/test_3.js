function solution(mails, period, K) {
  return mails.filter((v, idx) => {
    return (
      mails.slice(idx, idx + period).reduce((acc, cur) => (cur += acc)) / 3 >= K
    );
  }).length;
}
console.log(solution([9, 20, 10, 30, 23, 4], 3, 20));
