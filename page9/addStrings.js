/**
* 415. Add Strings
* https://leetcode.com/problems/add-strings/description/
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  if (!num1 || !num2) return "0";
  let ret = "";
  let rest = 0;
  for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i --, j --) {
    let digit1 = parseInt(num1[i]) || 0,
        digit2 = parseInt(num2[j]) || 0,
        sum = digit1 + digit2 + rest;
    if (sum >= 10) {
      rest = 1;
      ret = sum - 10 + ret;
    } else {
      rest = 0;
      ret = sum + ret;
    }
  }
  if (rest === 1) {
    ret = "1" + ret;
  }
  return ret;
};

