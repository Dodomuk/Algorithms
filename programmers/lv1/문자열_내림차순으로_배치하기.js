function solution(s) {
  const arr = s.split('');
  let lowerCase = '';
  let upperCase = '';
  arr.forEach((e) => {
    if (e.charCodeAt() >= 97 && e.charCodeAt() <= 122) {
      lowerCase += e;
    } else {
      upperCase += e;
    }
  });
  return lowerCase
    .split('')
    .sort()
    .reverse()
    .join('')
    .concat(upperCase.split('').sort().reverse().join(''));
}

// 좋아요 👍🏼
// function solution(s) {
//   return s
//     .split("")
//     .sort()
//     .reverse()
//     .join("");
// }
