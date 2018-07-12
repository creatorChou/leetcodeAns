/**
* 120. Triangle
* https://leetcode.com/problems/triangle/description/
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let i, j, fromLeft, fromRight, sum = Number.MAX_VALUE;
  let dp = new Array(triangle.length);
  for (i = 1; i < triangle.length; i ++) {
    for (j = 0; j < triangle[i].length; j ++) {
      fromLeft = false;
      fromRight = false;
      if (triangle[i-1][j-1] !== undefined) {
        fromLeft = triangle[i-1][j-1] + triangle[i][j];
      }
      if (triangle[i-1][j] !== undefined) {
        fromRight = triangle[i-1][j] + triangle[i][j];
      }
      if (fromLeft !== false && fromRight !== false) {
        triangle[i][j] = Math.min(fromLeft, fromRight);
      } else {
        triangle[i][j] = fromLeft === false ? fromRight : fromLeft;
      }
    }
  }
  for (i = 0; i < triangle.length; i ++) {
    sum = Math.min(sum, triangle[triangle.length - 1][i])
  }
  return sum;
};
