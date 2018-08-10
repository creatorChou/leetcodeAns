/**
* 260. Single Number III
* https://leetcode.com/problems/single-number-iii/description/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i ++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  return Array.from(set);
};
