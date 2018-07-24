/**
*	200. Number of Islands
*	https://leetcode.com/problems/number-of-islands/description/
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0,
  		i, j;
  for (i = 0; i < grid.length; i ++) {
  	for (j = 0; j < grid[i].length; j ++) {
  		if (grid[i][j] === "1") {
  			count ++;
  			DFS(i, j, grid);
  		}
  	}
  }
  return count;
};

function DFS(x, y, grid) {
	if (grid[x] != null && grid[x][y] === "1") {
		grid[x][y] = "0";
		DFS(x + 1, y, grid);
		DFS(x - 1, y, grid);
		DFS(x, y + 1, grid);
		DFS(x, y - 1, grid);
	}
}
