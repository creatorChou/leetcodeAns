/**
* 1037. Valid Boomerang
* https://leetcode.com/problems/valid-boomerang/
*/

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  if (points[0][0] === points[1][0] && points[0][1] === points[1][1]) return false;
  if (points[0][0] === points[2][0] && points[0][1] === points[2][1]) return false;
  if (points[2][0] === points[1][0] && points[2][1] === points[1][1]) return false;
  let a1 = points[0][0] - points[1][0];
  let a2 = points[0][1] - points[1][1];
  let b1 = points[1][0] - points[2][0];
  let b2 = points[1][1] - points[2][1];
  if (a1 === 0 || b1 === 0) {
    return a1 !== b1;
  } else {
    return a2 / a1 !== b2 / b1;
  }
};

// Runtime: 56 ms, faster than 85.82% of JavaScript online submissions for Valid Boomerang.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Valid Boomerang.
