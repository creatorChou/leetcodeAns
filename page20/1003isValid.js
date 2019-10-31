/**
* 1003. Check If Word Is Valid After Substitutions
* https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/
*/

/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function(S) {
  let stack = [];
  for (let c of S) {
    if (c === "c") {
      if (stack[stack.length - 1] === "b" && stack[stack.length - 2] === "a") {
        stack.pop();
        stack.pop();
      } else {
        stack.push(c);
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
};


// Runtime: 68 ms, faster than 85.71% of JavaScript online submissions for Check If Word Is Valid After Substitutions.
// Memory Usage: 40.1 MB, less than 100.00% of JavaScript online submissions for Check If Word Is Valid After Substitutions.
