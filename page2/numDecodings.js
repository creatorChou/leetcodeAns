/**
* 91. Decode Ways
* https://leetcode.com/problems/decode-ways/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === "0" ? 0 : 1;
  let first, second;
  for (var i = 2; i < s.length + 1; i ++) {
    first = parseInt(s.slice(i - 1,  i));
    second = parseInt(s.slice(i - 2, i));
    if (first !== 0) {
      dp[i] += dp[i - 1];
    }
    if (second >= 10 && second <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  console.log(dp);
  return dp[s.length];
};

console.log(numDecodings("01"));
