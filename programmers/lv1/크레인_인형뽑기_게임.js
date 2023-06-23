function solution(board, moves) {
  board = board.map((arr) => board.map((e) => e.shift()).filter((e) => e));
  const queue = moves
    .map((move) => board[move - 1].shift() || 0)
    .filter((e) => e);
  const max = queue.length;
  let res = 0;
  for (let index = 0; index < max; index++) {
    if (queue.length <= 2 || queue[index + 1] === undefined) {
      return (
        (res + (queue.length === 2 ? (queue[0] === queue[1] ? 1 : 0) : 0)) * 2
      );
    }
    if (queue[index] === queue[index + 1]) {
      res++;
      queue.splice(index, 2);
      index = index - 2;
    }
  }
  return res * 2;
}

function eraser(arr, index = 0, cnt = 0) {
  if (arr.length < 2) {
    return cnt * 2;
  }
  if (arr[index] === arr[index + 1]) {
    cnt++;
    arr.splice(index, 2);
    return eraser(arr, index - 1, cnt);
  } else {
    return eraser(arr, index + 1, cnt);
  }
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
