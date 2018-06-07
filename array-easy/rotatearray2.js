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
  if (nums.length < 2 || k === nums.length) return;
  if (k > nums.length) k = k - nums.length;
  nums.length += k;
  for (let i = nums.length - k - 1; i >= 0; i --) {
    nums[i + k] = nums[i];
  }
  for (let j = 0; j < k; j ++) {
    nums[j] = nums[nums.length - k + j];
  }
  nums.length -= k;
};
