/**
* Can I Win
* https://leetcode.com/problems/can-i-win/
*/

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) return false;
};
