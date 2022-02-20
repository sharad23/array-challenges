// https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1
const _ = require('lodash')
const nums = [1, 5, 7, 1]
sum = 6
results = []

const hash = {}

// brute force approach
// for(let i = 0; i < nums.length; i++) {
//     for(let j = i+1; j < nums.length; j++){
//         if (nums[i]+nums[j] == 6) {
//             results.push([nums[i], nums[j]])
//         }
//     } 
// }

// console.log(results)

// efficient approach
_.each(nums, (num) => (!(num in hash)) && _.set(hash, num, 1))
_.each(nums, (row) => {
    if ((sum-row) in hash) {
        results.push([row, sum-row])
    }
})

console.log(results)