/**
* 190. Reverse Bits
* https://leetcode.com/problems/reverse-bits/description/
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let s = "";
  for (let i = 0; i < 32; i++) {
    s += Math.abs(n % 2);
    n >>= 1;
  }
  console.log(s);
  return parseInt(s, 2);
};

console.log(reverseBits(2147483648))
