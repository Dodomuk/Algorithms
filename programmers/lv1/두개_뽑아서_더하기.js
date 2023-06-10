function solution(numbers) {
  const set = new Set();
  numbers.forEach((e, idx) => {
    for (let index = idx + 1; index < numbers.length; index++) {
      set.add(e + numbers[index]);
    }
  });
  return [...set].sort((a, b) => a - b);
}
