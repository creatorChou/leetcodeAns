/**
* 807. Max Increase to Keep City Skyline
* https://leetcode.com/problems/max-increase-to-keep-city-skyline/
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  if (!grid || !grid.length) return 0;
  let rowLength = grid.length;
  let colLength = grid[0].length;
  let row = new Array(rowLength).fill(0);
  let col = new Array(colLength).fill(0);
  let sum = 0;
  for (let i = 0; i < rowLength; i ++) {
    for (let j = 0; j < colLength; j ++) {
      row[i] = Math.max(row[i], grid[i][j]);
      col[j] = Math.max(col[j], grid[i][j]);
    }
  }
  for (let i = 0; i < rowLength; i ++) {
    for (let j = 0; j < colLength; j ++) {
      sum += Math.min(row[i], col[j]) - grid[i][j];
    }
  }
  return sum;
};

// Runtime: 60 ms, faster than 92.16% of JavaScript online submissions for Max Increase to Keep City Skyline.
