/**
* 628. Maximum Product of Three Numbers
* https://leetcode.com/problems/maximum-product-of-three-numbers/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  if (nums.length === 3) return nums[0] * nums[1] * nums[2];
  let p1 = 0, p2 = 0, p3 = 0, n1 = 0, n2 = 0;
  let nm1 = -Number.MAX_VALUE, nm2 = -Number.MAX_VALUE, nm3 = -Number.MAX_VALUE;
  let positiveCount = 0;
  let negativeCount = 0;
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] >= 0) {
      positiveCount ++;
      if (nums[i] >= p1) {
        p3 = p2;
        p2 = p1;
        p1 = nums[i];
      } else if (nums[i] >= p2) {
        p3 = p2;
        p2 = nums[i];
      } else if (nums[i] > p3) {
        p3 = nums[i];
      }
    } else {
      negativeCount ++;
      if (nums[i] >= nm1) {
        nm3 = nm2;
        nm2 = nm1;
        nm1 = nums[i];
      } else if (nums[i] >= nm2) {
        nm3 = nm2;
        nm2 = nums[i];
      } else if (nums[i] > nm3) {
        nm3 = nums[i];
      }
      if (nums[i] <= n1) {
        n2 = n1;
        n1 = nums[i];
      } else if (nums[i] < n2) {
        n2 = nums[i];
      }
    }
  }
  if (positiveCount === 0) {
    return nm1 * nm2 * nm3;
  } else {
    return Math.max(n1 * n2 * p1, p1 * p2 * p3);
  }
};

// Runtime: 72 ms, faster than 86.21% of JavaScript online submissions for Maximum Product of Three Numbers.
