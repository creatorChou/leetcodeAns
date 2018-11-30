/**
* 633. Sum of Square Numbers
* https://leetcode.com/problems/sum-of-square-numbers/
*/

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  for (let a = 0; a <= Math.sqrt(c); a ++) {
    let b = Math.sqrt(c - a * a);
    if (parseInt(b) === b) return true;
  }
  return false;
};
