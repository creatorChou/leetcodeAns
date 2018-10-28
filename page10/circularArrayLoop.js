/**
* Circular Array Loop
* https://leetcode.com/problems/circular-array-loop/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
  let tracked = 0,
      forward = new Array(nums.length),
      backward = new Array(nums.length);

  for (let i = 0; tracked < nums.length; tracked ++) {
    if (nums[i] > 0) {
      if (forward[i]) {
        return true;
      } else {
        forward[i] = true;
      }
    } else if (nums[i] < 0) {
      if (backward[i]) {
        return true;
      } else {
        backward[i] = true;
      }
    }
    i += nums[i];
    if (i < 0) {
      i = nums.length - i;
    }
    if (i >= nums.length) {
      i = i - nums.length;
    }
  }
  return false;
};
