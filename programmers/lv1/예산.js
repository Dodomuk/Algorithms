function solution(d, budget) {
  let res = 0;
  let total = d.reduce((acc, cur) => (acc += cur));
  d.sort((a, b) => b - a).forEach((e, idx) => {
    if (!res) {
      if (total < budget || budget === total) {
        res = d.length - idx;
      }
    }
    total -= e;
  });
  return res;
}
