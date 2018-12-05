/**
* 657. Robot Return to Origin
* https://leetcode.com/problems/robot-return-to-origin/
*/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  if (moves.length % 2 === 1) return false;
  let x = 0, y = 0;
  for (let w of moves) {
    switch (w) {
      case "U":
        y ++;
        break;
      case "D":
        y --;
        break;
      case "L":
        x --;
        break;
      case "R":
        x ++;
        break;
      default:
        break;
    }
  }
  return x === 0 && y === 0;
};
