/**
* 695. Max Area of Island
* https://leetcode.com/problems/max-area-of-island/
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let maxArea = 0;
  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[i].length; j ++) {
      if (grid[i][j] !== 1) continue;
      maxArea = Math.max(maxArea, dfs(grid, i, j));
    }
  }
  return maxArea;
};

function dfs (grid, i, j) {
  let sum = 1;
  grid[i][j] = 2;
  if (grid[i-1] && grid[i-1][j] === 1) {
    sum += dfs(grid, i - 1, j);
  }
  if (grid[i+1] && grid[i+1][j] === 1) {
    sum += dfs(grid, i + 1, j);
  }
  if (grid[i][j-1] === 1) {
    sum += dfs(grid, i, j - 1);
  }
  if (grid[i][j+1] === 1) {
    sum += dfs(grid, i, j + 1);
  }
  return sum;
}
