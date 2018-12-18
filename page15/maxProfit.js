/**
* 714. Best Time to Buy and Sell Stock with Transaction Fee
* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
*/

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  if (!prices || prices.length === 0) return 0;
  let buy = prices[0];
  let sell = 0;
  let profit = 0;
  for (let i = 1; i < prices.length; i ++) {
    if (prices[i] <= buy) {
      let preProfit = sell - buy - fee;
      if (preProfit > 0) profit += preProfit;
      buy = prices[i];
      sell = 0;
    } else if (prices[i] >= sell) {
      sell = prices[i];
    } else {
      let preProfit = sell - buy - fee;
      if (preProfit > 0 && prices[i] <= sell - fee) {
        profit += preProfit;
        buy = prices[i];
        sell = 0;
      }
    }
  }
  let preProfit = sell - buy - fee;
  if (preProfit > 0) profit += preProfit;
  return profit;
};

// Runtime: 92 ms, faster than 90.91% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee.
