// BFS 문제

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input.shift());
const arr = input.map((e) => e.split('').map((e) => parseInt(e)));

const returnArr = [];
const xCheck = [-1, 1, 0, 0];
const yCheck = [0, 0, -1, 1];
const visitCheck = {};
//
solution();

function solution() {
  for (let index_1 = 0; index_1 < n; index_1++) {
    for (let index_2 = 0; index_2 < n; index_2++) {
      if (arr[index_1][index_2] && !visitCheck[[index_1, index_2]]) {
        bfs(index_1, index_2);
      }
    }
  }
  console.log(returnArr.length);
  returnArr.sort((a, b) => a - b).map((e) => console.log(e));
}

function bfs(x, y) {
  let cnt = 1;
  visitCheck[[x, y]] = true;
  const queue = [[x, y]];
  while (queue.length) {
    [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const dx = xCheck[i] + x;
      const dy = yCheck[i] + y;

      if (
        dx >= 0 &&
        dy >= 0 &&
        dx < n &&
        dy < n &&
        arr[dx][dy] &&
        !visitCheck[[dx, dy]]
      ) {
        queue.push([dx, dy]);
        visitCheck[[dx, dy]] = true;
        cnt++;
      }
    }
  }
  if (cnt) returnArr.push(cnt);
}
