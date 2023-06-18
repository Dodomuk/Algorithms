function solution(x, y) {
  const numArr = Array(10).fill(0);
  const xArr = x.split('');

  for (let index = 0; index < x.length; index++) {
    const num = xArr[index];
    if (y.indexOf(num) !== -1) {
      numArr[parseInt(num)] = numArr[parseInt(num)] + 1;
      y = y.replace(num, '');
    } else {
      x = x.replaceAll(xArr[index], '');
    }
  }

  return (
    numArr
      .map((e, index) => (e ? String(index).repeat(e) : ''))
      .reverse()
      .join('') || '-1'
  );
}

console.log(solution('100', '2345'));
console.log(solution('100', '203045'));
console.log(solution('100', '123450'));
console.log(solution('12321', '42531'));
console.log(solution('5525', '1255'));
