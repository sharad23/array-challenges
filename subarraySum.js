// https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1
const _ = require('lodash')
const a = [1,2,3,4,5,6,7,8,9,10]
// const output = 15
// startIndex = 0
// endIndex = 0


// for (var i = 0; i < a.length; i++) {
//     sum = 0 
//     for (var j=i; j < a.length; j++) {
//         sum +=  a[j]
//         if (sum == output) {
//             console.log("here")
//             startIndex = i
//             endIndex = j
//             break;
//         }
//     }
// }

// console.log(startIndex, endIndex)


// efficient approach
const total = 15
i = 0
j = 0
sum  = 0
while(i < a.length) {
    sum += a[j]
    if (sum < total) {
        j++
    }

    if (sum > total) {
        sum -= a[j]
        i++
    }
    
    if (sum == total) {
        break;
    }
}

console.log(i,j)