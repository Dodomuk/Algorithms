function solution(nums) {
    let res = 0
    for (let index_1 = 0; index_1 < nums.length; index_1++) {
        const element_1 = nums[index_1];
        for (let index_2 = index_1 + 1; index_2 < nums.length; index_2++) {
            const element_2 = nums[index_2];
            for (let index_3 = index_2 + 1; index_3 < nums.length; index_3++) {
                const element_3 = nums[index_3];
                const number = element_1 + element_2 + element_3;
                let isPrime = true
                for (let index = 2; index < number; index++) {
                    if (!(number % index)) {
                        isPrime = false
                    }
                }
                if (isPrime) {
                    res++
                }
            }
        }
    }
    return res;
}

console.log(solution([1, 2, 3, 4]))
console.log(solution([1, 2, 7, 6, 4]))