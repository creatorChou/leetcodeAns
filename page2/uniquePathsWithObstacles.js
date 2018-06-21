/**
* 63. Unique Paths II
* https://leetcode.com/problems/unique-paths-ii/description/
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let i, j;
  let m = obstacleGrid.length,
      n = obstacleGrid[0].length;
  for (i = 0; i < m; i ++) {
    for (j = 0; j < n; j ++) {
      if (obstacleGrid[i][j] === 1) {
        continue;
      }
      if (i === 0 && j === 0) {
        obstacleGrid[i][j] = -1;
      } else {
        if (obstacleGrid[i-1] && obstacleGrid[i-1][j] && obstacleGrid[i-1][j] !== 1) {
          obstacleGrid[i][j] += obstacleGrid[i-1][j];
        }
        if (obstacleGrid[i][j-1] && obstacleGrid[i][j-1] !== 1) {
          obstacleGrid[i][j] += obstacleGrid[i][j-1];
        }
      }
    }
  }
  let end = obstacleGrid[m-1][n-1];
  if (end === 1) {
    return 0;
  } else {
    return -end;
  }
};
