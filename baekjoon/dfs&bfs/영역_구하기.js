// dfs bfs 문제

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2`.split('\n');
const firstLine = input[0].split(' ');
const [xSize, ySize] = [Number(firstLine[1]), Number(firstLine[0])];
const rectsCnt = Number(firstLine[2]);
const rect = Array.from(Array(xSize), () => Array(ySize).fill(false));
const rectsInfo = input.slice(1).map((e) => e.split(' ').map((e) => Number(e)));
const xCheck = [-1, 1, 0, 0];
const yCheck = [0, 0, -1, 1];
let res = [];

solution();
function solution() {
  for (let index = 0; index < rectsCnt; index++) {
    const [x1, y1, x2, y2] = rectsInfo[index];
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        rect[x][y] = true;
      }
    }
  }

  for (let x = 0; x < xSize; x++) {
    for (let y = 0; y < ySize; y++) {
      if (!rect[x][y]) bfs(x, y);
    }
  }
  console.log(res.length);
  console.log(res.sort((a, b) => a - b).join(' '));
}

function bfs(x, y) {
  rect[x][y] = true;
  let cnt = 1;
  const queue = [[x, y]];
  while (queue.length) {
    [x, y] = queue.shift();
    for (let index = 0; index < 4; index++) {
      const dx = xCheck[index] + x;
      const dy = yCheck[index] + y;

      if (dx >= 0 && dy >= 0 && dx < xSize && dy < ySize && !rect[dx][dy]) {
        rect[dx][dy] = true;
        cnt++;
        queue.push([dx, dy]);
      }
    }
  }
  if (cnt) res.push(cnt);
}
