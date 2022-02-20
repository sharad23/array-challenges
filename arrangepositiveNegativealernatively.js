// https://practice.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1
// 1st approach
// const a = [9, 4, -2, -1, 5, 0, -5, -3, 2]
// divide the array to positive and negative array

// const positive = [9, 4, 5, 0, 2]
// const negative = [-2, -1, -5, -3]


// const result = []

// for(let i = 0; i < a.length; i++) {
//     if (i < positive.length) {
//         result.push(positive[i])
//     }

//     if (i < negative.length) {
//         result.push(negative[i])
//     }
// }

// console.log(result)

// 2nd approach (without using extra space)
const a = [9, 4, -2, -1, 5, 0, -5, -3, 2]
// output [9, -2, 4, -1, 5, -5, 0, -3, 2]
// flag = 1 poitive
// flag = 0 negative
let flag = 0
for (let i=0; i < a.length; i++) {
    flag = !flag
    if ((a[i] >= 0 && flag == 1) || (a[i] < 0 && flag == 0)) {
        // the position is at the right place
        continue
    }
    for (let j=i+1; j < a.length; j++) {
        // swap here
        if ((a[j] >= 0 && flag == 1) || (a[j] < 0 && flag == 0)) {
            temp = a[j]
            a[j] = a[i]
            a[i] = temp
            break
        }
    }
}

console.log(a)