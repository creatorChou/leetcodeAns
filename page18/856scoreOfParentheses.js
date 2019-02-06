/**
* 856. Score of Parentheses
* https://leetcode.com/problems/score-of-parentheses/
*/

/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
  let stack = [];
  let sum = 0;
  for (let c of S) {
    if (c === "(") {
      stack.push(0);
    } else {
      let num = stack.pop() || 1;
      if (stack.length > 0) {
        if (num === 0) {
          stack[stack.length - 1] += 2;
        } else {
          stack[stack.length - 1] += num * 2;
        }
      } else {
        sum += num;
      }
    }
  }
  return sum;
};

// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Score of Parentheses.
