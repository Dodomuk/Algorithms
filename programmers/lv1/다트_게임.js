function solution(dartResult) {
  const numArr = dartResult.split(/[^0-9]/g).filter(e => e);
  const strArr = dartResult.split(/[0-9]/g).filter(e => e);

  let res = 0

  numArr.forEach((num, index) => {
    let additional = strArr[index].includes('#') ? -1 : 1
    additional = (strArr[index + 1] ?? '').includes('*') ? additional * 2 : additional
    additional = strArr[index].includes('*') ? additional * 2 : additional
    if (strArr[index].includes('S')) res += num * additional;
    else if (strArr[index].includes('D')) res += num * num * additional;
    else if (strArr[index].includes('T')) res += num * num * num * additional;
  })
  return res;
}


// 좋아요 👍🏼
function solution2(dartResult) {
  const bonus = { 'S': 1, 'D': 2, 'T': 3 },
    options = { '*': 2, '#': -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);
  console.log(darts)

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}

// console.log(solution('1S2D*3T'));
// console.log(solution('1D2S#10S'));
console.log(solution2('1D2S#10S'));
