/**
* 946. Validate Stack Sequences
* https://leetcode.com/problems/validate-stack-sequences/
*/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let stack = [];
  let j = 0;
  for (let i = 0; i < pushed.length; i ++) {
    stack.push(pushed[i]);
    while (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j ++;
    }
  }
  return stack.length === 0;
};

// Runtime: 64 ms, faster than 99.30% of JavaScript online submissions for Validate Stack Sequences.
// Memory Usage: 35.1 MB, less than 27.27% of JavaScript online submissions for Validate Stack Sequences.
