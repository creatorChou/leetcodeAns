/**
* 645. Set Mismatch
* https://leetcode.com/problems/set-mismatch/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let n = nums.length;
  let targetSum = (1 + n) * n / 2;
  let sum = 0;
  let memo = new Array(n);
  let result = [];
  for (let i = 0; i < n; i ++) {
    if (!memo[nums[i] - 1]) {
      sum += nums[i];
      memo[nums[i] - 1] = true;
    } else {
      result[0] = nums[i];
    }
  }
  result[1] = targetSum - sum;
  return result;
};

// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Set Mismatch.
