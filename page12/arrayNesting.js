/**
* 565. Array Nesting
* https://leetcode.com/problems/array-nesting/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  let memo = new Array(nums.length);
  let max = 0;
  for (let i = 0; i < nums.length; i ++) {
    if (memo[i]) continue;
    memo[i] = true;
    let count = 1;
    let nextIdx = nums[i];
    while (memo[nextIdx] !== true) {
      memo[nextIdx] = true;
      nextIdx = nums[nextIdx];
      count ++;
    }
    max = Math.max(max, count);
  }
  return max;
};

// Runtime: 80 ms, faster than 79.25% of JavaScript online submissions for Array Nesting.
