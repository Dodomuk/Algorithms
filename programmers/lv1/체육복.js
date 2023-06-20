function solution(n, lost, reserve) {
  const obj = {};
  for (let index = 1; index <= n; index++) {
    let myCloth = 1;
    if (lost.indexOf(index) > -1) {
      myCloth--;
    }
    if (reserve.indexOf(index) > -1) {
      myCloth++;
    }
    obj[index] = myCloth;
  }

  for (let index = 1; index <= n; index++) {
    if (!obj[String(index)]) {
      if (obj[String(index + 1)] === 2) {
        obj[String(index)] = obj[String(index)] + 1;
        obj[String(index + 1)] = obj[String(index + 1)] - 1;
      } else if (obj[String(index - 1)] === 2) {
        obj[String(index)] = obj[String(index)] + 1;
        obj[String(index - 1)] = obj[String(index - 1)] - 1;
      }
    }
  }

  return Object.values(obj).filter((e) => e).length;
}

console.log(solution(5, [2, 4], [1, 3, 5], 5));
console.log(solution(5, [2, 4], [3], 4));
console.log(solution(3, [3], [1], 2));
