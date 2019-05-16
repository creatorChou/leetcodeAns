/**
* 1009. Complement of Base 10 Integer
* https://leetcode.com/problems/complement-of-base-10-integer/
*/

/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  if (N === 0) return 1;
  let power = 0;
  let sum = 0;
  while(N > 0) {
    let bit = N & 1 === 0 ? 1 : 0;
    sum += bit * 2 ** power;
    power ++;
    N >>= 1;
  }
  return sum;
};

// Runtime: 52 ms, faster than 99.23% of JavaScript online submissions for Complement of Base 10 Integer.
// Memory Usage: 34 MB, less than 5.17% of JavaScript online submissions for Complement of Base 10 Integer.
