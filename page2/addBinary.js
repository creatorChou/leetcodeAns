/**
* 67. Add Binary
* https://leetcode.com/problems/add-binary/description/
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a.split("");
  b = b.split("");
  let num1, num2, temp, carry = 0;
  let sum = "";

  while (a.length > 0 || b.length > 0) {
    num1 = parseInt(a.pop()) || 0;
    num2 = parseInt(b.pop()) || 0;
    temp = num1 + num2 + carry;
    if (temp >= 2) {
      carry = 1;
      sum = temp - 2 + sum;
    } else {
      carry = 0;
      sum = temp + sum;
    }
  }
  if (carry) {
    return 1 + sum;
  } else {
    return sum;
  }
};
