/**
* 940. Distinct Subsequences II
* https://leetcode.com/problems/distinct-subsequences-ii/
*/

/**
 * @param {string} S
 * @return {number}
 */
var distinctSubseqII = function(S) {
  let len = S.length;
  let mod = 10 ** 9 + 7;
  let dp = new Array(26).fill(0);
  for (let i = 0; i < len; i ++) {
    let idx = S.charCodeAt(i) - 97;
    dp[idx] = (dp.reduce((prev, val) => prev + val) + 1) % mod;
  }
  return dp.reduce((prev, val) => prev + val) % mod;
};

// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Distinct Subsequences II.
// Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions for Distinct Subsequences II.

// detail:
// https://www.jianshu.com/p/02501f516437
