/**
* 441. Arranging Coins
* https://leetcode.com/problems/arranging-coins/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  return Math.sqrt(n * 8 + 1) - 1 >> 1;
};
