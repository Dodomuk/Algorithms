function solution(s, cnt = 0, zeroCnt = 0) {
    if (s === '1') {
        return [cnt, zeroCnt]
    }
    sWithoutZero = s.replaceAll('0', '')
    cnt++
    zeroCnt += s.length - sWithoutZero.length

    return solution(sWithoutZero.length.toString(2), cnt, zeroCnt)
}

console.log(solution('110010101001'))