/**
* 132 Pattern
* https://leetcode.com/problems/132-pattern/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  if (!nums || nums.length < 3) return false;
  for (let i = nums.length - 1; i >= 2; i--) {
    let lower = false;
    let higher = false;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > nums[i]) {
        higher = true;
      } else if (nums[j] < nums[i]) {
        if (higher) {
          lower = true;
        }
      }
    }
    if (lower && higher) {
      return true;
    }
  }
  return false;
};

function find132pattern2 (nums) {
  let stack = [];
  let candidate = -Number.MAX_VALUE;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < candidate) {
      return true;
    } else {
      while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
        candidate = stack.pop();
      }
      stack.push(nums[i]);
    }
  }
  return false;
}
