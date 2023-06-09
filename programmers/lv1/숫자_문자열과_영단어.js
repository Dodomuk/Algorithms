function solution(s) {
  const obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  for (let index = 0; index < 10; index++) {
    s = s.replaceAll(obj[index], index);
  }
  return parseInt(s);
}
