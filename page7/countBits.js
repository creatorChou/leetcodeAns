/**
* 338. Counting Bits
* https://leetcode.com/problems/counting-bits/description/
*/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let dp = new Array(num + 1);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i ++) {
    dp[i] = dp[(i-1)&i] + 1;
  }
  return dp;
};

console.log(countBits(10));

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const dp = new Array(num + 1).fill(0)
    for (let i = 1; i <= num; i++) {
        dp[i] = (i & 1) + dp[i >>> 1]
    }
    return dp
};
