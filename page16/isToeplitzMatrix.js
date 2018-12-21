/**
* 766. Toeplitz Matrix
* https://leetcode.com/problems/toeplitz-matrix/
*/

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  for (let i = 1; i < matrix.length; i ++) {
    for (let j = 1; j < matrix[i].length; j ++) {
      if (matrix[i][j] !== matrix[i-1][j-1]) return false;
    }
  }
  return true;
};

// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Toeplitz Matrix.
