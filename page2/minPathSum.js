/**
* 64. Minimum Path Sum
* https://leetcode.com/problems/minimum-path-sum/description/
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let i, j;
  let left, top;
  let m = grid.length,
      n = grid[0].length;
  for (i = 0; i < m; i ++) {
    for (j = 0; j < n; j ++) {
      if (i === 0 && j === 0) {
        continue;
      }
      if (grid[i - 1] && grid[i - 1][j] !== undefined) {
        top = grid[i - 1][j];
      } else {
        top = Number.MAX_VALUE;
      }
      if (grid[i][j - 1] !== undefined) {
        left = grid[i][j - 1];
      } else {
        left = Number.MAX_VALUE;
      }
      grid[i][j] += Math.min(top, left);
    }
  }
  return grid[m - 1][n - 1];
};

console.log(minPathSum([[0,0],[0,0]]));
