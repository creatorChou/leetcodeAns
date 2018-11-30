/**
* 643. Maximum Average Subarray I
* https://leetcode.com/problems/maximum-average-subarray-i/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i ++) {
    sum += nums[i];
  }
  let max = sum;
  for (let i = k, pre = 0; i < nums.length; i ++, pre ++) {
    sum = sum - nums[pre] + nums[i];
    max = Math.max(sum, max);
  }
  return max / k;
};

// Runtime: 96 ms, faster than 99.00% of JavaScript online submissions for Maximum Average Subarray I.
