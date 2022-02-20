// https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1
const _ = require('lodash')
const a = [2,3,1,2,3]
const hash = {}
const dup = []

_.each(a, (row) => {
    if (row in hash) {
        hash[row] += 1
        hash[row] > 1 && dup.push(row)
    } else {
        hash[row] = 1
    }
});

console.log(dup)