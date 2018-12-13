/**
* 740. Delete and Earn
* https://leetcode.com/problems/delete-and-earn/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let map = {};
  let sum = 0;
  let min = 10000;
  let max = 1;
  for (let num of nums) {
    max = Math.max(max, num);
    min = Math.min(min, num);
    if (map[num]) {
      map[num] += num;
    } else {
      map[num] = num;
    }
  }
  let maxValue = 0;
  if (min > max) return maxValue;
  let dp = new Array(max - min + 1);
  for (let i = 0; i < dp.length; i ++) {
    let key = min + i;
    let val = map[key] || 0;
    let plus = dp[i-2] || 0;
    let prev = dp[i-1] || 0;
    dp[i] = Math.max(val + plus, prev);
    maxValue = Math.max(maxValue, dp[i]);
  }
  return maxValue;
};

// Runtime: 60 ms, faster than 84.21% of JavaScript online submissions for Delete and Earn.
