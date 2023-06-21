function solution(s) {
    if (s === '()') return true
    if (s === '(' || s === ')') return false
    return solution(s.substring(0, ~~(s.length / 2)))
}

console.log(solution('()()'))
console.log(solution("(())()"))
console.log(solution(")()("))
console.log(solution("(()("))