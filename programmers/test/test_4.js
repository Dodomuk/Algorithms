function solution(grade) {
  const originArr = [...grade];
  const gradeMap = new Map();
  grade
    .sort((a, b) => b - a)
    .forEach((e, index) => {
      if (!gradeMap.get(e)) {
        gradeMap.set(e, index + 1);
      }
    });
  return originArr.map((e) => gradeMap.get(e));
}

console.log(solution([3, 2, 1, 2]));
