function solution(numbers, target) {
  let cnt = 0;

  function dfs(number, index) {
    if (numbers.length > index) {
      const shiftedNumber = numbers[index];
      dfs(number + shiftedNumber, index + 1);
      dfs(number - shiftedNumber, index + 1);
    } else {
      if (number === target) {
        cnt++;
      }
      return;
    }
  }

  dfs(0, 0);

  return cnt;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
