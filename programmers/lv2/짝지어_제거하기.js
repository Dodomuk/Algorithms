function solution(s) {
  const arr = [];
  for (let i of s) {
    arr.push(i);
    if (arr[arr.length - 1] === arr[arr.length - 2]) {
      arr.pop();
      arr.pop();
    }
  }
  return arr.length ? 0 : 1;
}
console.log(solution('baabaa'));
console.log(solution('cdcd'));
console.log(solution('ggggssssaaaassagga'));
