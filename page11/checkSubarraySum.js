/**
* 523. Continuous Subarray Sum
* https://leetcode.com/problems/continuous-subarray-sum/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  for (let i = 0; i < nums.length - 1; i ++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j ++) {
      sum += nums[j];
      if (sum % k === 0 || sum === k) return true;
    }
  }
  return false;
};
