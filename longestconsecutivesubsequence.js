// https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1

// 1st apprach, this come after sorting
// const a = [2,6,1,9,4,5,3]
// sort the array
// a.sort()
// console.log(a)
// length = 1
// max_length = 1
// for(let i =0; i < a.length-1; i++) {
//     if(a[i]+1 == a[i+1]) {
//         length += 1
//         if(length > max_length) {
//             max_length = length
//         }
//     }
//     else {
//         length = 0
//     }
// }

// console.log(max_length)



// 2nd apprach without sorting but two loops
// const _ = require('lodash')
// const a = [2,6,1,9,4,5,3]
// for (let i = 0; i < a.length; i++) {
//     length = 1
//     max_length = 1
//     right = a[i] + 1
//     left = a[i] - 1

//     while (_.includes(a, left)) {
//         left = left - 1
//         length += 1
        
//     }

//     while (_.includes(a, right)) {
//         right = right + 1
//         length += 1
//     }
    
//     if (length > max_length) {
//         max_length = length
//     }
        
// }

// console.log(max_length)

// 3rd approach (efficeint appraoch)