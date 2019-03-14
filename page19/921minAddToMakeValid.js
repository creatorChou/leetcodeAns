/**
* 921. Minimum Add to Make Parentheses Valid
* https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
*/

/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let stack = [];
  for (let c of S) {
    if (stack.length > 0) {
      let last = stack[stack.length - 1];
      if (c === ")" && last === "(") {
        stack.pop();
      } else {
        stack.push(c);
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length;
};
// Runtime: 76 ms, faster than 32.86% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
// Memory Usage: 35.1 MB, less than 17.86% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.

/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let l = 0, r = 0;
  for (let c of S) {
    if (c === "(") {
      l ++;
    } else {
      if (l > 0) {
        l --;
      } else {
        r ++;
      }
    }
  }
  return l + r;
};
// Runtime: 60 ms, faster than 68.57% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
// Memory Usage: 35.4 MB, less than 7.14% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
