process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let index = 0; index < b; index++) {
    let str = '';
    for (let index2 = 0; index2 < a; index2++) {
      str += '*';
    }
    console.log(str);
  }
});

// 좋아요 👍🏼
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', (data) => {
//   const n = data.split(' ');
//   const a = Number(n[0]),
//     b = Number(n[1]);
//   const row = '*'.repeat(a);
//   for (let i = 0; i < b; i++) {
//     console.log(row);
//   }
// });
