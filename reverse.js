const _ = require('lodash')
const a = [1,2,3,4,5]
i = 0
j = a.length - 1
while(i != j) {
    const temp = a[i]
    a[i] = a[j]
    a[j] = temp

    i++;
    j--;
}

console.log(a)