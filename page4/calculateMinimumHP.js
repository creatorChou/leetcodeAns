/**
* 174. Dungeon Game
* https://leetcode.com/problems/dungeon-game/description/
*/

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  let i, j, right, bottom, val,
      len = dungeon.length,
      innerLen = dungeon[0].length;

  for (i = len - 1; i >= 0; i --) {
    for (j = innerLen - 1; j >= 0; j --) {
      val = dungeon[i][j];
      right = dungeon[i][j + 1];
      bottom = dungeon[i + 1] ? dungeon[i + 1][j] : null;
      if (right != null && bottom != null) {
        val += Math.max(right, bottom);
      } else if (right == null && bottom != null) {
        val += bottom;
      } else if (right != null && bottom == null) {
        val += right;
      }
      dungeon[i][j] = val >= 0 ? 0 : val;
    }
  }
  console.log(dungeon)
  return Math.abs(dungeon[0][0]) + 1;
};

calculateMinimumHP(
  [
    [1,-3,3],
    [0,-2,0],
    [-3,-3,-3],
    [4,-1,-2]]
);
