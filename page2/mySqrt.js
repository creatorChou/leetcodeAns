/**
* 69. Sqrt(x)
* https://leetcode.com/problems/sqrtx/description/
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return 0;
  let start = 1;
  let end = x;
  let mid;
  while (start < end - 1) {
    mid = Math.floor((end + start) / 2);
    if (mid * mid > x) {
      end = mid;
    } else if (mid * mid < x) {
      start = mid;
    } else {
      return mid;
    }
  }
  return start;
};

console.log(mySqrt(5321))
