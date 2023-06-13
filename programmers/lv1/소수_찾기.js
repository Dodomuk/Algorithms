function solution(n) {
    const set = new Set()
    for (let index = 3; index <= n; index += 2) {
        set.add(index)
    }
    set.add(2)
    for (let index = 2; index <= n; index++) {
        if (set.has(index)) {
            for (let index_2 = index + index; index_2 <= n; index_2 += index) {
                console.log(index_2)
                set.delete(index_2)
            }
        }
    }

    return set.size
}

console.log(solution(5))
console.log(solution(10))