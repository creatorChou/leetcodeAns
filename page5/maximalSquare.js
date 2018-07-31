/**
* 221. Maximal Square
* https://leetcode.com/problems/maximal-square/description/
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix || matrix.length === 0) return 0;
  let i, j, len = matrix[0].length;
  let lenArr = new Array(len);
  for (i = 0; i < len; i ++) {
    lenArr[i] = [];
  }
  for (i = 0; i < matrix.length; i ++) {
    for (j = 0; j < len; j ++) {
      matrix[i][j] = parseInt(matrix[i][j]);
      if (matrix[i][j - 1] && matrix[i][j] !== 0) {
        matrix[i][j] += matrix[i][j - 1];
      }
      lenArr[j][i] = matrix[i][j];
    }
  }
  let maxSize = 0;
  for (i = 0; i < len; i ++) {
    maxSize = Math.max(maxSize, findMax(lenArr[i]));
  }
  return maxSize;
};

// ???
var findMax = function (arr) {
  let max = 0, end, base;
  for (let i = 0; i < arr.length; i ++) {
    end = Math.min(arr[i] + i, arr.length - 1);
    
  }
  return max;
}
