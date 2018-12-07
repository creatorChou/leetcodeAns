/**
* 665. Non-decreasing Array
* https://leetcode.com/problems/non-decreasing-array/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let arr = [nums[0]];
  let rest = [];
  for (let i = 1; i < nums.length; i ++) {
    if (rest.length === 0) {
      if (nums[i] >= arr[arr.length - 1]) {
        arr.push(nums[i]);
      } else {
        rest.push(nums[i]);
      }
    } else {
      if (nums[i] < nums[i-1]) {
        return false;
      } else {
        rest.push(nums[i]);
      }
    }
  }
  if (arr.length <= 1 || rest.length <= 1) return true;
  if (arr[arr.length - 2] <= rest[0]) return true;
  if (arr[arr.length - 2] <= rest[1]) return true;
  return false;
};

// Runtime: 68 ms, faster than 78.49% of JavaScript online submissions for Non-decreasing Array.
