/**
* 678. Valid Parenthesis String
* https://leetcode.com/problems/valid-parenthesis-string/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let stack = [];
  for (let c of s) {
    if (c === ")") {
      if (stack.length > 0) {
        let star = 0;
        let found = false;
        while (stack.length > 0) {
          let last = stack.pop();
          if (last === "(") {
            found = true;
            break;
          } else {
            star ++;
          }
        }
        if (!found) {
          star --;
        }
        while (star > 0) {
          stack.push("*");
          star --;
        }
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  let left = 0;
  for (let c of stack) {
    if (c === "(") {
      left ++;
    } else {
      if (left > 0) {
        left --;
      }
    }
  }
  return left === 0;
};
