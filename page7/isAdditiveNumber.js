/**
* 306. Additive Number
* https://leetcode.com/problems/additive-number/description/
*/

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  if (num.indexOf("0") === 0) return false;
  let len = Math.ceil(num.length / 3);
  let num1 = "";
  for (let i = 0; i <= len; i ++) {
    num1 += num[i];
    if (num[i + 1] === "0") continue;
    if (helper(parseInt(num1), num.slice(i + 1))) return true;
  }
  return false;
};

function helper (num1, num) {
  let num2 = "";
  let len = Math.ceil(num.length / 3);
  let sum, rest;
  for (let i = 0; i <= len; i ++) {
    num2 += num[i];
    if (num[i + 1] === "0") continue;
    sum = num1 + parseInt(num2) + "";
    rest = num.slice(i + 1);
    if (sum.length > rest.length) {
      return false;
    } else if (sum.length === rest.length) {
      return sum === rest;
    } else {
      if (rest.indexOf(sum) === 0 && helper(sum, rest.slice(sum.length))) {
        return true;
      }
    }
  }
  return false;
}
