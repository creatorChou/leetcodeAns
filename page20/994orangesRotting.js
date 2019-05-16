/**
* 994. Rotting Oranges
* https://leetcode.com/problems/rotting-oranges/
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let n = grid[0].length;
  let max = 0;
  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < n; j ++) {
      if(grid[i][j] === 2) {
        let queue = [[i, j]];
        let level = grid[i][j] + 1;
        while (queue.length > 0) {
          let len = queue.length;
          for (let k = 0; k < len; k ++) {
            let pos = queue.shift();
            if (grid[pos[0] - 1] && (grid[pos[0] - 1][pos[1]] === 1 || grid[pos[0] - 1][pos[1]] > level)) {
              grid[pos[0] - 1][pos[1]] = level;
              queue.push([pos[0] - 1, pos[1]]);
            }
            if (grid[pos[0] + 1] && (grid[pos[0] + 1][pos[1]] === 1 || grid[pos[0] + 1][pos[1]] > level)) {
              grid[pos[0] + 1][pos[1]] = level;
              queue.push([pos[0] + 1, pos[1]]);
            }
            if (grid[pos[0]][pos[1] - 1] === 1 || grid[pos[0]][pos[1] - 1] > level) {
              grid[pos[0]][pos[1] - 1] = level;
              queue.push([pos[0], pos[1] - 1]);
            }
            if (grid[pos[0]][pos[1] + 1] === 1 || grid[pos[0]][pos[1] + 1] > level) {
              grid[pos[0]][pos[1] + 1] = level;
              queue.push([pos[0], pos[1] + 1]);
            }
          }
          level ++;
        }
      }
    }
  }
  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < n; j ++) {
      if (grid[i][j] === 0) continue;
      if (grid[i][j] === 1) return -1;
      max = Math.max(max, grid[i][j] - 2);
    }
  }
  return max;
};

// Runtime: 68 ms, faster than 98.68% of JavaScript online submissions for Rotting Oranges.
// Memory Usage: 37.1 MB, less than 45.07% of JavaScript online submissions for Rotting Oranges.
