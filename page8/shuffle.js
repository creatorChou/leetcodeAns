/**
*	384. Shuffle an Array
*	https://leetcode.com/problems/shuffle-an-array/description/
*/

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let ret = [];
  let map = {};
  let len = this.nums.length;
  while (len > 0)
};

