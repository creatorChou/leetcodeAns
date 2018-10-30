/**
* Next Greater Element I
* https://leetcode.com/problems/next-greater-element-i/
*/

/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  let result = [];
  for (let i = 0; i < findNums.length; i ++) {
    let start = false;
    let greater = -1;
    for (let j = 0; j < nums.length; j ++) {
      if (nums[j] === findNums[i]) {
        start = true;
        continue;
      }
      if (start && nums[j] > findNums[i]) {
        greater = nums[j];
        break;
      }
    }
    result[i] = greater;
  }
  return result;
};
