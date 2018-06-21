/**
* 62. Unique Paths
* https://leetcode.com/problems/unique-paths/description/
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let chessboard = [];
  let i, j, topVal, leftVal;
  for (i = 0; i < m; i ++) {
    chessboard.push(new Array(n));
  }
  for (i = 0; i < m; i ++) {
    for (j = 0; j < n; j ++) {
      if (i === 0 && j === 0) {
        chessboard[i][j] = 1;
      } else {
        if (chessboard[i - 1] && chessboard[i - 1][j]) {
          topVal = chessboard[i - 1][j];
        } else {
          topVal = 0;
        }
        if (chessboard[i][j - 1]) {
          leftVal = chessboard[i][j - 1];
        } else {
          leftVal = 0;
        }
        chessboard[i][j] = topVal + leftVal;
      }
    }
  }
  return chessboard[m-1][n-1];
};

console.log(uniquePaths(51, 9));
