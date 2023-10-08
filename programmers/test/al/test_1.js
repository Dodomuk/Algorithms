function solution(user_times, t) {
  const result = Math.max(...user_times.map((time) => t - (time % t)));
  return result === t ? 0 : result;
}

console.log(solution([20, 40, 65, 110], 30));
console.log(solution([20, 40, 65, 110], 1));
console.log(solution([30, 30, 30, 30], 30));
