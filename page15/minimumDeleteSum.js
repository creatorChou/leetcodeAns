/**
* 712. Minimum ASCII Delete Sum for Two Strings
* https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  let dp = new Array(s1.length + 1);
  for (let i = 0; i < dp.length; i ++) {
    dp[i] = new Array(s2.length + 1);
  }
  for (let i = s1.length - 1; i >= 0; i--) {
    dp[i][s2.length] = 
  }
};
