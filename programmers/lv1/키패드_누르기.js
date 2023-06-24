function solution(numbers, hand) {
  hand = hand === 'right' ? 'R' : 'L';
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };
  let leftThumb = keypad['*'];
  let rightThumb = keypad['#'];
  return numbers
    .map((number) => {
      const left =
        Math.abs(keypad[number][0] - leftThumb[0]) +
        Math.abs(keypad[number][1] - leftThumb[1]);
      const right =
        Math.abs(keypad[number][0] - rightThumb[0]) +
        Math.abs(keypad[number][1] - rightThumb[1]);
      if (number % 3 === 2 || !number) {
        if (left === right) {
          hand === 'R'
            ? (rightThumb = keypad[number])
            : (leftThumb = keypad[number]);
          return hand;
        } else if (left > right) {
          rightThumb = keypad[number];
          return 'R';
        } else {
          leftThumb = keypad[number];
          return 'L';
        }
      }
      if (number % 3 === 0) {
        rightThumb = keypad[number];
        return 'R';
      }
      if (number % 3 === 1) {
        leftThumb = keypad[number];
        return 'L';
      }
    })
    .join('');
}

console.log(
  solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right', 'LRLLLRLLRRL')
);
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left', 'LRLLRRLLLRR'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
