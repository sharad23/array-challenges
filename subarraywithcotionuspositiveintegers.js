const a = [1,2,3,4,5,-1, 3,4,1,1,1,8]

max_length = 0
length = 0
start  = 0
end = 0
prev_start = 0
for (let i =0; i < a.length; i++) {
    if (a[i] >= 0) {
        length += 1
        if (length > max_length) {
            max_length = length
            start = prev_start
            end = i
        }
    }

    if (a[i] < 0) {
        length = 0
        prev_start = i+1
    }
}

console.log([start, end])