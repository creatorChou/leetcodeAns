/**
* 384. Shuffle an Array
* https://leetcode.com/problems/shuffle-an-array/description/
*/

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
  this.copy = nums.slice();
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums = this.copy;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  for (let i = this.nums.length - 1; i >= 0; i--) {
    let rand = Math.trunc(Math.random() * i);
    this.nums[i] ^= this.nums[rand];
    this.nums[rand] ^= this.nums[i];
    this.nums[i] ^= this.nums[rand];
  }
  return this.nums;
};

