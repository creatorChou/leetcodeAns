/**
* Longest Valid Parentheses
* https://leetcode.com/problems/longest-valid-parentheses/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let stack = [];
  let continuity = false;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < s.length; i ++) {
    if (stack[stack.length - 1] === "(" && s[i] === ")") {
      stack.pop();
      if (!continuity) {
        count = 2;
        continuity = true;
      } else {
        count += 2;
      }
      if (count > sum) {
        sum = count;
      }
    } else {
      stack.push(s[i]);
      if (s[i] === ")") {
        continuity = false;
      }
    }
  }
  return sum;
};
