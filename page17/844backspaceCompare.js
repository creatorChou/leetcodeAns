/**
* 844. Backspace String Compare
* https://leetcode.com/problems/backspace-string-compare/
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let stack1 = [];
  let stack2 = [];
  for (let c of S) {
    if (c !== "#") {
      stack1.push(c);
    } else {
      stack1.pop();
    }
  }
  for (let c of T) {
    if (c !== "#") {
      stack2.push(c);
    } else {
      stack2.pop();
    }
  }
  return stack1.join("") === stack2.join("");
};
