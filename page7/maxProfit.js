/**
* 309. Best Time to Buy and Sell Stock with Cooldown
* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
  let buy = [],
      sell = [],
      cooldown = [],
      len = prices.length;

  buy[0] = - prices[0];     // the max profit when the operation of this turn is buy
  sell[0] = 0;              // the max profit when the operation of this turn is sell
  cooldown[0] = 0;          // the max profit when the operation of this turn is cooldown

  for (let i = 1; i < len; i ++) {
    buy[i] = Math.max(cooldown[i-1] - prices[i], buy[i-1]);
    sell[i] = Math.max(sell[i-1], prices[i] + buy[i-1]);
    cooldown[i] = Math.max(buy[i-1], sell[i-1], cooldown[i-1]);
  }

  return Math.max(sell[len-1], cooldown[len-1]);
};

console.log(maxProfit([1,2,5,1,2]));
