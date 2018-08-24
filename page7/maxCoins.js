/**
* 312. Burst Balloons
* https://leetcode.com/problems/burst-balloons/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 2) {
    return nums[0] * nums[1] + Math.max(nums[0], nums[1]);
  } else {
    let min = nums[1],
        index = 1,
        product = nums[0] * nums[1] * nums[2],
        p;
    for (let i = 2; i < nums.length - 1; i ++) {
      if (nums[i] < min) {
        min = nums[i];
        index = i;
        product = nums[i - 1] * nums[i] * nums[i + 1];
      } else if (nums[i] === min) {
        p = nums[0] * nums[1] * nums[2];
        if (product < p) {
          index = i;
          product = p;
        }
      }
    }
    nums.splice(index, 1);
    return product + maxCoins(nums);
  }
};
