let arr = [
  '0110100',
  '0110101',
  '1110101',
  '0000111',
  '0100000',
  '0111110',
  '0111000',
];
arr = arr.map((e) => e.split('').map((e) => parseInt(e)));

function solution(n) {
  let cnt = 0;
  function dfs(x, y) {
    console.log('x', x);
    console.log('y', y);

    if (arr[x][y]) {
      cnt += 1;
      arr[x][y] = 0;
      if (arr[x][y + 1]) {
        dfs(x, y + 1);
      } else if (arr[x + 1][y]) {
        dfs(x + 1, y);
      } else {
        console.log(cnt);
        solution(n);
      }
    } else {
        if (x < n) {
          dfs(x + 1, y);
        } else if (y < n) {
          dfs(x, y + 1);
        } else {
          return;
      } else {
        dfs(x + 1, y);
      }
    }
  }
  dfs(0, 0);
}

solution(7);
