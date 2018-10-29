/**
* Island Perimeter
* https://leetcode.com/problems/island-perimeter/
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[i].length; j ++) {
      if (grid[i][j] === 1) {
        let len = 4;
        if (grid[i-1] && grid[i-1][j] === 1) {
          len --;
        }
        if (grid[i+1] && grid[i+1][j] === 1) {
          len --;
        }
        if (grid[i][j-1] === 1) {
          len --;
        }
        if (grid[i][j+1] === 1) {
          len --;
        }
        perimeter += len;
      }
    }
  }
  return perimeter;
};

var islandPerimeter2 = function(grid) {
  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[i].length; j ++) {
      if (grid[i][j] === 1) {
        return DFS(grid, i, j);
      }
    }
  }
  return 0;
};

function DFS(grid, i, j) {
  let perimeter = 4;
  grid[i][j] = true;
  if (grid[i-1] && grid[i-1][j] !== 0) {
    if (grid[i-1][j] === 1) {
      perimeter += DFS(grid, i - 1, j);
    }
    perimeter --;
  }
  if (grid[i+1] && grid[i+1][j] !== 0) {
    if (grid[i+1][j] === 1) {
      perimeter += DFS(grid, i + 1, j);
    }
    perimeter --;
  }
  if (grid[i][j-1] !== 0 && grid[i][j-1] != null) {
    if (grid[i][j-1] === 1) {
      perimeter += DFS(grid, i, j - 1);
    }
    perimeter --;
  }
  if (grid[i][j+1] !== 0 && grid[i][j+1] != null) {
    if (grid[i][j+1] === 1) {
      perimeter += DFS(grid, i, j + 1);
    }
    perimeter --;
  }
  return perimeter;
}
