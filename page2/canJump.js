/**
* Jump Game
* https://leetcode.com/problems/jump-game/description/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxStep = nums[0];
  for (let i = 1; i < nums.length; i ++) {
    if (maxStep === i && nums[i] === 0) {
      return false;
    }
    maxStep = Math.max(i + nums[i], maxStep);
    if (maxStep >= nums.length - 1) return true;
  }
  return true;
};

console.log(canJump([1]));
