// https://practice.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1

const a = [1, -1, 3, 2, -7, -5, 11, 6]
// [1, 3, 2, -1, -7, 11, 6, -5]
i = 0
j = 0
while (i < a.length){
    if (a[i] < 0 ) 
    { 
        if (i != j)
        {
            temp = a[i]
            a[i] = a[j]
            a[j] = temp
        }
        j++
    }
    i++
}

console.log(a)

