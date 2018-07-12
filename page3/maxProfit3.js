/**
* 123. Best Time to Buy and Sell Stock III
* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let len = prices.length, 
    dp = new Array(len).fill(0),
    prev = 0,
    profit = 0,
    i, j, price, max;

  for (i = 0; i < len; i ++) {
    prev = i > 0 ? Math.max(dp[i - 1], prev) : 0;
    max = 0;
    for (j = i + 1; j < len; j ++) {
      price = prices[j] - prices[i];
      dp[j] = Math.max(price, dp[j]);
      max = Math.max(price, max);
    }
    profit = Math.max(prev + max, profit);
  }
  return profit;
};

// O(n)
var maxProfit2 = function(prices) {
  let b1 = Number.MIN_VALUE,
      
};
