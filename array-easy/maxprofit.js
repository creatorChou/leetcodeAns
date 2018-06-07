/**
* Best Time to Buy and Sell Stock II
* https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let sum = 0;
  for (let i = 1; i <= prices.length; i++) {
    sum += prices[i] >= prices[i - 1] ? prices[i] - prices[i - 1] : 0;
  }
  return sum;
};
