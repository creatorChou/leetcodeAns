/**
* 673. Number of Longest Increasing Subsequence
* https://leetcode.com/problems/number-of-longest-increasing-subsequence/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  if (!nums) return 0;
  let dp = [{path: 1, len: 1}];
  let count = 1, max = 1;
  for (let i = 1; i < nums.length; i ++) {
    let path = 1;
    let len = 0;
    for (let j = 0; j < i; j ++) {
      if (nums[j] >= nums[i]) continue;
      if (dp[j].len > len) {
        path = 1;
        len = dp[j].len;
      } else if (dp[j].len === len) {
        path ++;
      }
    }
    dp[i] = {
      path: path,
      len: len + 1
    }
    if (dp[i].len > max) {
      max = dp[i].len;
      count = dp[i].path;
    } else if (dp[i].len === max) {
      count ++;
    }
  }
  return count;
};
