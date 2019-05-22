/**
* 1017. Convert to Base -2
* https://leetcode.com/problems/convert-to-base-2/
*/

/**
 * @param {number} N
 * @return {string}
 */
var baseNeg2 = function(N) {
  if (N === 0) return "0";
  let s = "";
  while (N !== 0) {
    s = (N & 1) + s;
    N = -(N >> 1);
  }
  return s;
};

// Runtime: 64 ms, faster than 26.53% of JavaScript online submissions for Convert to Base -2.
// Memory Usage: 33.9 MB, less than 47.78% of JavaScript online submissions for Convert to Base -2.
