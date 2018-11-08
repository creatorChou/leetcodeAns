/**
* 504. Base 7
* https://leetcode.com/problems/base-7/
*/

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num === 0) {
    return "0";
  }
  let sign = "";
  if (num < 0) {
    sign = "-";
    num = - num;
  }
  let base7 = "";
  while (num > 0) {
    base7 = num % 7 + base7;
    num = Math.floor(num / 7);
  }
  return sign + base7;
};

// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Base 7.
