/**
* 240. Search a 2D Matrix II
* https://leetcode.com/problems/search-a-2d-matrix-ii/description/
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0)
    return false;
  let len = matrix[0].length - 1;
  for (let i = 0; i < matrix.length; i ++) {
    if (matrix[i][0] <= target && matrix[i][len] >= target) {
      if (matrix[i].indexOf(target) !== -1) {
        return true;
      }
    }
  }
  return false;
};

// 540 ms
