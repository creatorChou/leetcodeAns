/**
* 537. Complex Number Multiplication
* https://leetcode.com/problems/complex-number-multiplication/
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  let num1 = convertExpresssionToArray(a);
  let num2 = convertExpresssionToArray(b);
  let real = num1[0] * num2[0] - num1[1] * num2[1] + "+";
  let imaginary = num1[0] * num2[1] + num1[1] * num2[0] + "i";
  return real + imaginary;
};

function convertExpresssionToArray(expression) {
  let num = [];
  let sign = 1;
  let n = null;
  for (let i = 0; i < expression.length; i ++) {
    if (expression[i] === "+") {
      if (n !== null) {
        num[0] = n * sign;
        n = null;
      }
      sign = 1;
    } else if (expression[i] === "-") {
      if (n !== null) {
        num[0] = n * sign;
        n = null;
      }
      sign = -1;
    } else if (expression[i] !== "i") {
      let digit = parseInt(expression[i]);
      if (n === null) {
        n = digit;
      } else {
        n = n * 10 + digit;
      }
    } else {
      num[1] = n * sign;
    }
  }
  for (let i = 0; i < num.length; i ++) {
    if (!num[i]) {
      num[i] = 0;
    }
  }
  return num;
}
