/**
* 892. Surface Area of 3D Shapes
* https://leetcode.com/problems/surface-area-of-3d-shapes/
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let sum = 0;
  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[i].length; j ++) {
      if (grid[i][j] !== 0) {
        sum += 4 * grid[i][j] + 2;
        if (grid[i][j - 1]) {
          sum -= Math.min(grid[i][j - 1], grid[i][j]) * 2;
        }
        if (grid[i - 1] && grid[i - 1][j]) {
          sum -= Math.min(grid[i - 1][j], grid[i][j]) * 2;
        }
      }
    }
  }
  return sum;
};

// Runtime: 64 ms, faster than 73.91% of JavaScript online submissions for Surface Area of 3D Shapes.
// Memory Usage: 35.5 MB, less than 33.33% of JavaScript online submissions for Surface Area of 3D Shapes.
