const _ = require('lodash')
const a = [1, 5, 3, 4, 3, 5, 6]
const hash = {}
let index;

// 1 st approach
_.each(a, (row, i) => {
    if (row in hash) {
        hash[row]['count'] += 1
        if (!index || hash[row]['index'] < index) {
            index = hash[row]['index']
        }
    }else {
        hash[row] = {'count': 1, index: i}
    }
})

console.log(index)

// 2nd approach

