/**
* 202. Happy Number
* https://leetcode.com/problems/happy-number/description/
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let res = getDigitSquare(n);
  let set = new Set();
  set.add(res);
  while (res !== 1) {
    res = getDigitSquare(res);
    if (set.has(res)) {
      return false;
    } else {
      set.add(res);
    }
  }
  return res;
};

function getDigitSquare(n) {
  let res = 0;
  while (n > 0) {
    res += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return res;
}
