/**
* Find All Duplicates in an Array
* https://leetcode.com/problems/find-all-duplicates-in-an-array/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let result = [];
  nums.sort();
  for (let i = 1; i < nums.length; i ++) {
    if (nums[i] === nums[i - 1]) {
      result.push(nums[i]);
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates2 = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i ++) {
    let idx = Math.abs(nums[i]) - 1;
    if (nums[idx] < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      nums[idx] = -nums[idx];
    }
  }
  return result;
};
