function solution(n, arr1, arr2) {
  return arr1.map((e, idx) => {
    let item1 = e.toString(2);
    let item2 = arr2[idx].toString(2);

    const res1 =
      item1.length < n
        ? '0'
            .repeat(n - item1.length)
            .concat(item1)
            .split('')
        : item1.split('');

    const res2 =
      item2.length < n
        ? '0'
            .repeat(n - item2.length)
            .concat(item2)
            .split('')
        : item2.split('');

    return res1
      .map((x, xIdx) => (x === '1' || res2[xIdx] === '1' ? '#' : ' '))
      .join('');
  });
}

// 좋아요 👍🏼
// function solution(n, arr1, arr2) {
//     return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }

// const addZero = (n, s) => {
//     return '0'.repeat(n - s.length) + s;
// }
