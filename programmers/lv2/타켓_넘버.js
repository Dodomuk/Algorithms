//🧐 다시 풀어보기 (DFS 문제)
function solution(numbers, target) {
    let cnt = 0

    function dfs(index, sum) {
        if (index === numbers.length) {
            if (sum === target) {
                cnt++
            }
            return
        }

        dfs(index + 1, sum + numbers[index])
        dfs(index + 1, sum - numbers[index])
    }

    dfs(0, 0)

    return cnt;
}

console.log(solution([1, 1, 1, 1, 1], 3))
console.log(solution([4, 1, 2, 1], 4))