function solution(num) {
  if (String(num).length % 2) {
    num = parseInt('1' + '0'.repeat((num + '').length));
    return solution(num);
  } else {
    const foot = (num + '').split('').map((e) => parseInt(e));
    const head = foot.splice(0, foot.length / 2);
    const isSame =
      foot.reduce((acc, cur) => acc * cur) ===
      head.reduce((acc, cur) => acc * cur);
    if (isSame) {
      return num;
    } else {
      return solution(num + 1);
    }
  }
}

console.log(solution(1));
