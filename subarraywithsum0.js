// [1, 3, -2, 2, 6, 7]
// [1, 4, 2, 4, 10, 17]
// if same 

const { result } = require("lodash")

// [2, -2, 3, 5]
// [2, 0, 3, 8]

// [1, 3, 0, 1]
// [1, 4, 4, 5]
//  tale 2 as subarray

// [1, 3, -4]
// [1, 4, 0]
// if 0 take all the subarrays

// [1, 1, 3, -4]
// [1, 2, 5, 1]
// take 1 to 3 as subarray

// [1,1,1,1,-4,-2, 2]
// [1, 3, -4, 1, -1]

// efficent approach , to find the first sub array with sum 0
// const hash = {}
// // const a = [1, 3, -2, 2, 6, 7]
// // const a = [1, 1, 3, -4]
// sum = 0
// start = -1
// end = -1
// for (let i = 0; i < a.length; i++) {
//     sum += a[i]
//     if (sum == 0) {
//         start = 0
//         end = i
//     }

//     if (sum in hash) {
//         start = hash[sum]+1
//         end = i
//     }
//     hash[sum] = i
// }

// console.log(start, end)

// efficeint approach to find all the subarray whoose sum is 0
// const a = [1,1,1,1,-4,-2, 2] 
//  [1,2, 3, 4, 0, -2, 0]
const a = [1, 3, -2, 2, 1, 2, -2, 4, -4]
let hash = {}
sum = 0
start = 0
end = 0
results = []

for (let i = 0; i < a.length; i++) { 
    sum += a[i]
    if (sum == 0) {
        end = i
        results.push([start, end])
        start = i + 1
        hash = {}
    }

    if (sum in hash) {
        start = hash[sum]+1
        end = i
        results.push([start, end])
        hash = {}
    }
    hash[sum] = i
}


console.log(results)
