function solution(n, words) {
    const stack = [words[0]]
    for (let index = 1; index < words.length; index++) {
        if (words[index - 1].charAt(words[index - 1].length - 1) !== words[index].charAt(0) || stack.includes(words[index])) {
            return [((index + 1) % n) || n, ~~(index / n) + 1]
        } else {
            stack.push(words[index])
        }
    }
    return [0, 0]
}

//
// 좋아요 👍🏼
// function solution(n, words) {
//     let answer = 0;
//     words.reduce((prev, now, idx) => {
//         answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
//         return now[now.length - 1];
//     }, "")

//     return answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0, 0];
// }

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]))
