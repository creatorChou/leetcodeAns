/**
* 229. Majority Element II
* https://leetcode.com/problems/majority-element-ii/description/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let times = Math.floor(nums.length / 3);
  nums.sort((a, b) => a - b);
  let count = 0,
      curr,
      result = [];
  for (let i = 0; i < nums.length; i ++) {
    if (curr !== nums[i]) {
      if (curr != null && count > times) {
        result.push(curr)
      }
      curr = nums[i];
      count = 1;
    } else {
      count ++;
    }
  }
  if (curr != null && count > times) {
    result.push(curr)
  }
  return result;
};
