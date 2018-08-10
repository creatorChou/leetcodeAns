/**
* 224. Basic Calculator
* https://leetcode.com/problems/basic-calculator/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [], num = "", temp;
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === " ") continue;
    if (s[i] === ")") {
      let arr = [];
      while ((temp = stack.pop()) !== "(") {
        arr.unshift(temp);
      }
      stack.push(helper(arr));
    } else {
      num = stack[stack.length - 1];
      if (s[i] === "+" || s[i] === "-" || s[i] === "(" || stack.length === 0
        || num === "+" || num === "-" || num === "(") {
        stack.push(s[i]);
      } else {
        stack[stack.length - 1] = num + s[i];
      }
    }
  }
  return helper(stack);
};

function helper (arr) {
  let res = parseInt(arr[0]), num = "", operator = null;
  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] === "+" || arr[i] === "-") {
      operator = arr[i];
    } else {
      if (operator === "+") {
        res += parseInt(arr[i]);
      } else if (operator === "-") {
        res -= parseInt(arr[i]);
      }
    }
  }
  return res;
}

console.log(calculate("2-(5-6)"))
