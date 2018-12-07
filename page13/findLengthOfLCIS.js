/**
* 674. Longest Continuous Increasing Subsequence
* https://leetcode.com/problems/longest-continuous-increasing-subsequence/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let count = 0;
  let len = 1;
  for (let i = 1; i <= nums.length; i ++) {
    if (nums[i] > nums[i-1]) {
      len ++;
    } else {
      count = Math.max(count, len);
      len = 1;
    }
  }
  return count;
};
// Runtime: 56 ms, faster than 98.63% of JavaScript online submissions for Longest Continuous Increasing Subsequence.
