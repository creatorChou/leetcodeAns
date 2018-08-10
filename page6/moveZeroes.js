/**
* 283. Move Zeroes
* https://leetcode.com/problems/move-zeroes/description/
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] !== 0) {
      arr.push(nums[i]);
      nums[i] = 0;
    }
  }
  for (let i = 0; i < arr.length; i ++) {
    nums[i] = arr[i];
  }
};
