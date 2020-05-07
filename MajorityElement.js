// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  let frequency = {}
  let currentElement = nums[0]
  let majorityElement = nums[0]

  for (let i = 0; i, i < nums.length; i++) {
    currentElement = nums[i]

    if (frequency[currentElement] !== undefined) frequency[currentElement]++
    else frequency[currentElement] = 1

    if (frequency[currentElement] > frequency[majorityElement])
      majorityElement = currentElement
  }

  return majorityElement
}
