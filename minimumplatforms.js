// const arr = [940, 950, 1125, 1500, 1800]
// const dep = [1200, 1120, 1130, 1900, 2000]

// const arr = [0900, 1100, 1235]
// const dep = [1000, 1200, 1240]

const arr = [800, 815, 910]
const dep = [900, 1015, 1000]

// let minimum_platforms = 1
// for (let i =0; i < arr.length; i++) {
//     platforms = 1
//     let last_dep;
//     for (let j =0; j < arr.length; j++) {
//         if (i == j) {
//             continue;
//         }
//         if ((dep[i] > arr[j] && dep[i] < dep[j]) || (dep[j] > arr[i] && dep[j] < dep[i])) {
//             // intersection
//             if (last_dep && last_dep > arr[j]) {
//                 last_dep = dep[j]
//                 platforms += 1
//             }

//             if (!last_dep) {
//                 platforms += 1
//                 last_dep = dep[j]
//             }

//         }
//     }

//     if (platforms > minimum_platforms) {
//         minimum_platforms = platforms
//     }
// }

// console.log(minimum_platforms)

// efficeint apprach
