function solution(t, p) {
    return t.slice(0, t.length - p.length + 1).split('').filter((e, index) => parseInt(t.slice(index, index + p.length)) <= parseInt(p)).length
}

console.log(solution("3141592", "271"))
console.log(solution("500220839878", "7"))
console.log(solution("10203", "15"))
