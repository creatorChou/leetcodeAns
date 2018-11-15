/**
* 554. Brick Wall
* https://leetcode.com/problems/brick-wall/
*/

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  let map = {};
  let max = 0;
  for (let i = 0; i < wall.length; i ++) {
    let p = 0;
    for (let j = 0; j < wall[i].length - 1; j ++) {
      p += wall[i][j];
      if (!map[p]) {
        map[p] = 1;
      } else {
        map[p] ++;
      }
      max = Math.max(max, map[p]);
    }
  }
  return wall.length - max;
};

// Runtime: 76 ms, faster than 89.47% of JavaScript online submissions for Brick Wall.
