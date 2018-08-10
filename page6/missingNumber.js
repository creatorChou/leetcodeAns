/**
* 268. Missing Number
* https://leetcode.com/problems/missing-number/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if (nums.length === 0) return 0;
  let max = nums[0],
      min = nums[0],
      len = nums.length,
      sum1 = nums[0];
  for (let i = 1; i < len; i ++) {
    sum1 += nums[i];
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[i]);
  }
  if (min !== 0) {
    return 0;
  } else {
    let res = max * (max + 1) / 2 - sum1;
    return res === 0 ? max + 1 : res;
  }
};

var missingNumber2 = function(nums) {
  let res = nums.length;
  for (let i = 0; i < nums.length; i ++) {
    res ^= i ^ nums[i];
  }
  return res;
};
