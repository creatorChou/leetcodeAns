/**
* 682. Baseball Game
* https://leetcode.com/problems/baseball-game/
*/

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let sum = 0;
  let valid = [];
  let point;
  for (let op of ops) {
    switch (op) {
      case "+":
        point = valid[valid.length - 1] + valid[valid.length - 2];
        sum += point;
        valid.push(point);
        break;
      case "D":
        point = valid[valid.length - 1] * 2;
        sum += point;
        valid.push(point);
        break;
      case "C":
        sum -= valid.pop();
        break;
      default:
        point = parseInt(op);
        valid.push(point);
        sum += point;
        break;
    }
  }
  return sum;
};

// Runtime: 56 ms, faster than 96.00% of JavaScript online submissions for Baseball Game.
