/**
* 389. Find the Difference
* https://leetcode.com/problems/find-the-difference/description/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let bit = 0;
  for (let i = 0; i < s.length; i ++) {
    bit ^= s.codePointAt(i) ^ t.codePointAt(i);
  }
  bit ^= t.codePointAt(i);
  return String.fromCharCode(bit);
};
