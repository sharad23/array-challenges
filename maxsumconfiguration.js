// https://practice.geeksforgeeks.org/problems/max-sum-in-the-configuration/1
const a = [8,3,1,2]
// 8*0 + 3*1 + 1*2 + 2*3 = 11
// 8*1 + 3*2 + 1*3 + 2*0 = 18

// naive approach
// max_sum = 0
// for (let j = 0; j < a.length; j++) {
//     sum = 0
//     for (let i = 0; i < a.length; i++){
//         console.log('@@@@@@@@@@@@@')
//         console.log(`${a[i]} * ${(j+i)%a.length}`)
//         console.log('##############')
//         temp = a[i] * ((j+i)%a.length)
//         sum = sum + temp
//         console.log(temp)
//         console.log(sum)
        
//     }
//     console.log('**********')
//     console.log(sum)
//     if (sum > max_sum) {
//         max_sum = sum
//     }
// }


// console.log(max_sum)

// efficent approach
