/**
* 327. Count of Range Sum
* https://leetcode.com/problems/count-of-range-sum/description/
*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
  let start = Math.max(0, lower);
  let end = Math.min(nums.length - 1, upper);
};
