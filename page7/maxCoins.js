/**
* 312. Burst Balloons
* https://leetcode.com/problems/burst-balloons/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  if (nums.length === 0) return 0;
  let min = nums[0];
  for (let i = 1; i < nums.length; i ++) {
    min = Math.min(min, nums[i]);
  }
  let left, right, sum = 0;
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] === min) {
      left = nums[i - 1];
      right = nums[i + 1];
      if (i === 0) {
        left = 1;
      }
      if (i === nums.length - 1) {
        right = 1;
      }
      sum += left * nums[i] * right;
      nums.splice(i, 1);
      i --;
    }
  }
  let num = nums[indices[0]],
      left = indices[0] === 0 ? 1 : nums[indices[0] - 1],
      right = indices[0] === nums.length - 1 ? 1 : nums[indices[0] + 1],
      sum = num * left * right;
};
