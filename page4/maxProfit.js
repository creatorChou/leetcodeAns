/**
* 188. Best Time to Buy and Sell Stock IV
* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/
*/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  let value = 0, min = prices[0], max = prices[0];
  for (var i = 1; i < prices.length; i ++) {
    if (prices[i] >= max) {
      max = prices[i];
    } else {
      value += max - min;
      min = prices[i];
      max = prices[i];
    }
  }
  value += max - min;
  return value;
};

// k = any
