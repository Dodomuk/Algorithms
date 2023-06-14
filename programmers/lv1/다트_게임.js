function solution(dartResult) {
  const arr = dartResult.split('');
  let res = 0;
  arr.forEach((e, index) => {
    let additional = 1;
    if (e === '#') {
      e = arr[index - 1];
      additional = -1;
    }
    const ascCode = e.charCodeAt();
    if ((ascCode >= 65 && ascCode <= 90) || ascCode === 42) {
      const num = Number(arr[additional > 0 ? index - 1 : index - 2]);
      if (e === 'S') res += num * additional;
      if (e === 'D') res += num * num * additional;
      if (e === 'T') res += num * num * num * additional;
      if (e === '*') res = res * 2;
      console.log(res, 'e', num);
    }
  });
  return res;
}

// console.log(solution('1S2D*3T'));
console.log(solution('1D2S#10S'));
