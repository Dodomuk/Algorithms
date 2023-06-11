function solution(answers) {
  const 수포자_1 = [1, 2, 3, 4, 5];
  const 수포자_2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const 수포자_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const 수포자_1_결과 = answers.reduce(
    (acc, cur, index) => acc + (cur === ((index + 1) % 5 || 5) ? 1 : 0),
    0
  );
  const 수포자_2_결과 = answers.reduce(
    (acc, cur, index) =>
      acc +
      (index % 2 ? (cur === 수포자_2[index % 8] ? 1 : 0) : cur === 2 ? 1 : 0),
    0
  );
  const 수포자_3_결과 = answers.reduce(
    (acc, cur, index) => acc + (cur === 수포자_3[index % 10] ? 1 : 0),
    0
  );

  const 높은점수 = Math.max(수포자_1_결과, 수포자_2_결과, 수포자_3_결과);
  const res = [];
  if (수포자_1_결과 === 높은점수) {
    res.push(1);
  }
  if (수포자_2_결과 === 높은점수) {
    res.push(2);
  }
  if (수포자_3_결과 === 높은점수) {
    res.push(3);
  }

  return res;
}

// 좋아요 👍🏼
// function solution(answers) {
//     var answer = [];
//     var a1 = [1, 2, 3, 4, 5];
//     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
//     var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
//     var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
//     var max = Math.max(a1c,a2c,a3c);

//     if (a1c === max) {answer.push(1)};
//     if (a2c === max) {answer.push(2)};
//     if (a3c === max) {answer.push(3)};

//     return answer;
// }

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
