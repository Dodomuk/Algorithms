function solution(arr, divisor) {
  arr = arr.filter((e) => !(e % divisor));
  return arr.length ? arr.sort((a, b) => a - b) : [-1];
}
