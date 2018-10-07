/**
*  410. Split Array Largest Sum
*  https://leetcode.com/problems/split-array-largest-sum/description/
*/

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  let sum = 0;
  for (let i = 0; i < nums.length; i ++) {
    sum += nums[i];
  }
  let ave = sum / m,
      max = 0,
      now = 0;

  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] >= ave) {
      now = 0;
      max = Math.max(nums[i], max);
    } else {
      if (now + nums[i] < ave) {
        now += nums[i];
      } else {
        if (now + nums[i] - ave < ave - now) {
          now += nums[i];
          max = Math.max(now, max);
          now = 0;
        } else {
          max = Math.max(now, max);
          now = nums[i];
        }
      }
    }
  }
  return max;
};
