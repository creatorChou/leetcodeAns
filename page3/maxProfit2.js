/**
* 122. Best Time to Buy and Sell Stock II
* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = [-prices[0]],
      sell = [0];
  for (let i = 1; i < prices.length; i ++) {
    buy[i] = Math.max(sell[i-1] - prices[i], buy[i-1]);
    sell[i] = Math.max(buy[i-1] + prices[i], sell[i-1]);
  }
  return sell[sell.length - 1];
};
