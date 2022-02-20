// https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1
// Find Largest sum contiguous Subarray
// const sum = [1,2,4,-3,-2,1]
// // [1,3,7,4,2,3]

// const sum = [1,2,3,-2,5]
// // [1,3,6,4,9]

// const sum = [1, -1, 0, 20]
// // [1, 0, 0, 20]

// const sum = [5,-1, 20]
// // [5,4,24]


// const sum = [-3, -2, -4, 50]
// // [-3, -5, -9, 41]

// const sum = [-3, -4, -1, -8]
// // [-3, -7, -6, -16]

// const a = [1,2,4,-3,-2,1]
//  [1,3,7,4,2,3]
// const a = [-3, -2, -4, 50]
// const a = [1,2,3,-2,5]
// const a = [1, -1, 10]
// const a = [-1, -2, -3]
// const a = [1,2,3,4,5,-20, 17]
// [1, 3, 6, 10, 15, -5, 12]
// const a = [-2, -1, -3]
// this algorithm gives u the max sum of subarray
// let max;
// sum = 0
// for (let i=0; i < a.length; i++) {
//     sum += a[i]
//     if (!max || (sum > max)) {
//        max = sum
//     }
//     if (sum == 0 || sum < 0) {
//         sum = 0
//     }
// }
// // console.log(sum)
// console.log(max)
// console.log([start, end])

// this algorithm gives u the subarray which has max sum
// const a = [1,2,3,4,5,-20, 17]
const a = [1,2,3,4,5,-20, 17]
let max;
sum = 0
end = 0
prev_start = 0
for (let i=0; i < a.length; i++) {
    sum += a[i]
    if (!max || (sum > max)) {
        start = prev_start
        end = i
        max = sum
    }
    if (sum == 0 || sum < 0) {
        sum = 0
        prev_start = i + 1
    }
}
console.log([start, end])