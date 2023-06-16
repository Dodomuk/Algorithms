function solution(n, m, section) {
  const wall = Array(n + 1).fill(false);
  let count = 0;

  for (let index = 0; index < section.length; index++) {
    if (!wall[section[index]]) {
      count++;
      wall.fill(true, section[index], section[index] + m);
      if (section.every((e) => wall[e])) {
        return count;
      }
    }
  }
}

// 좋아요 👍🏼
function solution2(n, m, sections) {
  var answer = 0;
  var painted = 0;
  for (var section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}

console.log(solution2(8, 4, [2, 3, 6]));
// console.log(solution(5, 4, [1, 3]));
// console.log(solution(4, 1, [1, 2, 3, 4]));
