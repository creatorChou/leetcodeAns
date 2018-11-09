/**
* 518. Coin Change 2
* https://leetcode.com/problems/coin-change-2/
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let dp = new Array(amount + 1).fill(0);

  return helper(amount, [], coins);
};

function helper (amount, dp, coins) {
  if (dp[amount] != null) return dp[amount];
  let count = 0;
  for (let i = 0; i < coins.length; i ++) {
    if (amount > coins[i]) {
      count += helper(amount - coins[i], dp, coins);
    } else {
      if (amount === coins[i]) {
        count += 1;
      }
      break;
    }
  }
  dp[amount] = count;
  return count;
}
