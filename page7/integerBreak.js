/**
* 343. Integer Break
* https://leetcode.com/problems/integer-break/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n < 4) {
    return n - 1;
  }
  if (n === 4) {
    return 4;
  }
  n -= 3;
  if (n > 4) {
    return 3 * integerBreak(n);
  } else {
    return 3 * n;
  }
};
