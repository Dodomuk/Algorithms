function solution(name, yearning, photo) {
  const map = new Map();
  name.forEach((e, index) => map.set(e, yearning[index]));
  return photo.map((e) => e.reduce((acc, cur) => acc + (map.get(cur) ?? 0), 0));
}

// 좋아요 👍🏼
// function solution(name, yearning, photo) {
//     return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
// }

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);
