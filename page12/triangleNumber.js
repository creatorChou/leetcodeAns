/**
* 611. Valid Triangle Number
* https://leetcode.com/problems/valid-triangle-number/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length - 2; i ++) {
    if (nums[i] === 0) continue;
    for (let j = i + 1; j < nums.length - 1; j ++) {
      for (let k = j + 1; k < nums.length; k ++) {
        if (nums[i] + nums[j] <= nums[k]) break;
        if (nums[k] - nums[i] < nums[j])
          count ++;
      }
    }
  }
  return count;
};
