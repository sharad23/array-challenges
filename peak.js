const _ = require('lodash')
const a = [1,2,3,4,8,18,5]
let highest = 0

_.each(a, (row) => {
    if (row > highest) {
        highest = row
    }
});

console.log(highest)