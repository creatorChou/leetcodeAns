/**
* Target Sum
* https://leetcode.com/problems/target-sum/
*/

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let dp = [];
  for (let i = 0; i < nums.length; i ++) {
    dp[i] = {};
  }
  return dfs(nums, S, dp, 0, 0);
};

function dfs (nums, S, dp, sum, i) {
  if (dp[i][sum] != null) return dp[i][sum];
  let count = 0;
  if (i === nums.length - 1) {
    if (sum + nums[i] === S) {
      count ++;
    }
    if (sum - nums[i] === S) {
      count ++;
    }
    return count;
  }
  count += dfs(nums, S, dp, sum + nums[i], i + 1);
  count += dfs(nums, S, dp, sum - nums[i], i + 1);
  dp[i][sum] = count;
  return count;
}

console.log(findTargetSumWays([1,1,1,1,1,1,1], 3));

// Runtime: 188 ms, faster than 80.68% of JavaScript online submissions for Target Sum.
