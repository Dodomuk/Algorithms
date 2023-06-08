function solution(sizes) {
    sizes = sizes.map(e => e.sort((a, b) => a - b))
    return Math.max(...sizes.map(e => e[0])) * Math.max(...sizes.map(e => e[1]))
}

// 좋아요 👍🏼
// function solution(sizes) {
//     const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
//     return hor * ver;
// }