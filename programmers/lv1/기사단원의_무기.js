function solution(number, limit, power) {
  const numberArr = [];
  for (let index = 1; index <= number; index++) {
    let count = 1;
    for (let index_2 = 1; index_2 <= Math.floor(index / 2); index_2++) {
      if (index % index_2 === 0) count++;
    }
    if (count > limit) count = power;

    numberArr.push(count);
  }
  return numberArr.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
