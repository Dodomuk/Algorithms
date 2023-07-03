let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let k = Number(input[0].split(' ')[1])
let list = input.slice(1).map(e => Number(e))

let res = 0
list.sort((a, b) => b - a)

for (const coin of list) {
    while (k >= coin) {
        k -= coin
        res++
    }
}

console.log(res)


