/**
* 136. Single Number
* https://leetcode.com/problems/single-number/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i ++) {
    if(set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  return set.keys().next().value || 0;
};

console.log(singleNumber([1,2,1,2]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber2 = function(nums) {
  
};
