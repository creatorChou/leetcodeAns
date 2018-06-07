/**
* Rotate Array
* https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  for (var i = 0; i < k; i++) {
    nums.shift(nums.pop());
  }
};
