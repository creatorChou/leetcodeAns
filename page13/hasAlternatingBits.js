/**
* 693. Binary Number with Alternating Bits
* https://leetcode.com/problems/binary-number-with-alternating-bits/
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let bit = n & 1;
  while (n > 0) {
    n >>= 1;
    let a = n & 1;
    if (a !== bit) {
      bit = a;
    } else {
      return false;
    }
  }
  return true;
};

// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Binary Number with Alternating Bits.
