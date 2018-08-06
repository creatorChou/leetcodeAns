/**
* 221. Maximal Square
* https://leetcode.com/problems/maximal-square/description/
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) return 0;
  let i, j, max = 0,
      len = matrix[0].length;
  for (i = 0; i < matrix.length; i ++) {
    for (j = 0; j < len; j ++) {
      let l = parseInt(matrix[i][j - 1]),
          t = parseInt(matrix[i - 1] ? matrix[i - 1][j] : null),
          lt = parseInt(matrix[i - 1] ? matrix[i - 1][j - 1] : null);
      if (l != null && t != null && lt != null) {
        if (matrix[i][j] === "1") {
          let min = Math.min(l, t, lt);
          if (min > 0) {
            matrix[i][j] = min + 1;
            max = Math.max(max, matrix[i][j]);
          } else {
            max = Math.max(max, 1);
          }
        }
      }
      if (l > 0 || t > 0 || lt > 0) {
        max = Math.max(max, 1);
      }
    }
  }
  return max * max;
}

let sq = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]

console.log(maximalSquare(sq))
console.log(sq);
