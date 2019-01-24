/**
* 840. Magic Squares In Grid
* https://leetcode.com/problems/magic-squares-in-grid/
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  let outLen = grid.length;
  if (outLen < 3 || grid[0].length < 3) return false;
  let innerLen = grid[0].length;
  let count = 0;
  for (let i = 0; i < outLen - 2; i ++) {
    for (let j = 0; j < innerLen - 2; j ++) {

    }
  }
};
