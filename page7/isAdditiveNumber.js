/**
* 306. Additive Number
* https://leetcode.com/problems/additive-number/description/
*/

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  let len = num.length;
  for (let i = 1; i <= len / 2; i ++) {
    for (let j = 1; Math.max(i, j) >= len - i - j; j ++) {
      if (isValid(i, j, num)) return true;
    }
  }
  return false;
};

function isValid (i, j, num) {
  if (num.charAt(0) === "0" && i > 1) return false;
  if (num.charAt(i) === "0" && j > 1) return false;
  let first = Number(num.substr(0, i)),
      second = Number(num.substr(i, j)),
      sum = first + second + "";
  for (let start = i + j; start < num.length; start += sum.length) {
  }
}
