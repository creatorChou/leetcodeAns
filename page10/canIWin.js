/**
* Can I Win
* https://leetcode.com/problems/can-i-win/
*/

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  let sum = (1 + maxChoosableInteger) * maxChoosableInteger / 2;
  if (sum < desiredTotal) return false;
  if (desiredTotal <= 0) return true;

  let used = new Array(maxChoosableInteger + 1).fill(false);
  let map = {};

};

function ICanWin (desiredTotal, used, map) {
  if (desiredTotal <= 0) return false;
}

function format (used) {
  let num = 0;
  for (let i = used.length - 1; i >= 0; i--) {
    if (used[i]) {
      num += Math.pow(2, i);
    }
  }
  return num;
}
