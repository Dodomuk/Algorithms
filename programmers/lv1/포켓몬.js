function solution(nums) {
  const set = new Set(nums);
  return set.size >= nums.length / 2 ? nums.length / 2 : set.size;
}

console.log(solution([3, 1, 2, 3]));
