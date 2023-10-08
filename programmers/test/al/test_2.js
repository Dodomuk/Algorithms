function solution(s) {
  let result = 0;
  s.forEach((currentNum, index) => {
    if (index) {
      if (index % 2) {
        if (currentNum <= s[index - 1]) {
          result++;
        }
      } else {
        if (currentNum >= s[index - 1]) {
          result++;
        }
      }
    }
  });
  return result;
}

console.log(solution([3, 3, 3], 1));
console.log(solution([3, -1, 0, 4], 2));
