/**
* 172. Factorial Trailing Zeroes
* https://leetcode.com/problems/factorial-trailing-zeroes/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 0, factor = 5;
  while (factor <= n) {
    count += Math.floor(n / factor);
    factor *= 5;
  }
  return count;
};

