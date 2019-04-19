/**
* 238. Product of Array Except Self
* https://leetcode.com/problems/product-of-array-except-self/description/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let res = new Array(nums.length).fill(1);
  let product = nums[0];
  for (let i = 1; i < nums.length; i ++) {
    res[i] = product;
    product *= nums[i];
  }
  product = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i --) {
    res[i] *= product;
    product *= nums[i];
  }
  return res;
};

// Runtime: 88 ms, faster than 89.90% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 42.5 MB, less than 37.76% of JavaScript online submissions for Product of Array Except Self.
