// O(1) VS O(N) from linear to constant time
// Summing function for a sorted, contiguous array of integers that starts with the number 1?
// Could easily be O(n) but...


// Traditional for loop complexity = Linear
const nums1 = [1,2,3,4,5]
let sum = 0
for(let num of nums1) {
    sum += num
}
console.log(nums1)

// Accessin one element out of an array cpmplexity = Constant 
const sumContiguousArray = function(ary) {
    // get the last item
    const lastItem = ary[ary.length - 1]
    // Gauss's trick
    return lastItem * (lastItem + 1) / 2
}
const nums = [1,2,3,4,5]
const sumOfArray = sumContiguousArray(nums)

console.log(nums)