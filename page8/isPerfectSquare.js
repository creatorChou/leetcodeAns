/**
* 367. Valid Perfect Square
* https://leetcode.com/problems/valid-perfect-square/description/
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;
  let start = 1,
      end = ~~(num / 2);

  while (start < end) {
    let mid = ~~((start + end) / 2);
    let product = mid * mid;
    if (product < num) {
      start = mid + 1;
    } else if (product > num) {
      end = mid - 1;
    } else {
      return true;
    }
  }
  return start*start === num || end*end === num;
};
