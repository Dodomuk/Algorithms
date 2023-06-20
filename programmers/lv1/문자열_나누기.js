function solution(s) {
  sArr = s.split('');
  const result = [];
  let header = sArr.shift();
  let cutter = '';

  sArr.forEach((e) => {
    if (!header) {
      header = e;
    } else {
      if (header.split('')[0] === e) {
        header += e;
      } else {
        cutter += e;
        if (header.length === cutter.length) {
          result.push(header + cutter);

          //초기화
          header = '';
          cutter = '';
        }
      }
    }
  });

  if (header) result.push(header + cutter);

  return result.length;
}

console.log(solution('banana', 3));
console.log(solution('abracadabra', 6));
console.log(solution('aaabbaccccabba', 3));
