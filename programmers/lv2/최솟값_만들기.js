function solution(A, B) {
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)

    return A.reduce((acc, cur) =>
        acc + (cur * B.shift())
        , 0)
}

console.log(solution([1, 4, 2], [5, 4, 4]))
console.log(solution([1, 2], [3, 4]))	