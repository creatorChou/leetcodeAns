/**
* Next Greater Element II
* https://leetcode.com/problems/next-greater-element-ii/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let stack = [];
  let result = [];
  for (let i = 0; i < nums.length; i ++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      result[stack.pop()] = nums[i];
    }
    stack.push(i);
  }

  for (let i = 0; i < nums.length; i ++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      result[stack.pop()] = nums[i];
    }
  }
  
  for (let i = 0; i < stack.length; i ++) {
    result[stack[i]] = -1;
  }
  return result;
};
