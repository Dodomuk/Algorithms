function solution(food) {
  const strArr = food
    .splice(1)
    .map((e, index) => String(index + 1).repeat(Math.floor(e / 2)));
  return strArr.join('') + '0' + strArr.reverse().join('');
}

console.log(solution([1, 3, 4, 6], '1223330333221'));
