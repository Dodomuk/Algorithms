function solution(s) {
    const sArr = s.split('');
    let isNotMinus = 0;
    for (const item of sArr) {
        if (item === ')') {
            if (isNotMinus === 0) {
                return false;
            } else {
                isNotMinus--;
            }
        }
        if (item === '(') isNotMinus++;
    }
    return isNotMinus ? false : true;
}

// 좋아요 👍🏼
// function is_pair(s){
//     var result = s.match(/(\(|\))/g);
//     return result[0] == '(' && result.length % 2 == 0 ? true : false
//   }

console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));
