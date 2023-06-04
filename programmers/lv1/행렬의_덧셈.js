function solution(arr1, arr2) {
  return arr1.map((e, eIdx) => e.map((x, xIdx) => x + arr2[eIdx][xIdx]));
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
