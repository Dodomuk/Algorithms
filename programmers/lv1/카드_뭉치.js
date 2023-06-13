function solution(cards1, cards2, goal) {
    for (let index = 0; index < goal.length; index++) {
        if (goal[index] === cards1[0]) {
            cards1.splice(0, 1)
            continue
        } else if (goal[index] === cards2[0]) {
            cards2.splice(0, 1)
            continue
        }
        return 'No'
    }
    return 'Yes'

}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]))