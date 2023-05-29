function solution(x) {
  return !(x % (x + '').split('').reduce((acc, cur) => acc + parseInt(cur), 0));
}
