/**
* 1021. Remove Outermost Parentheses
* https://leetcode.com/problems/remove-outermost-parentheses/
*/

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let lv = 0;
  let ss = "";
  for (let c of S) {
    if (c === "(") {
      lv ++;
      if (lv > 1) ss += c;
    } else {
      lv --;
      if (lv > 0) ss += c;
    }
  }
  return ss;
};

// Runtime: 64 ms, faster than 81.05% of JavaScript online submissions for Remove Outermost Parentheses.
// Memory Usage: 36.2 MB, less than 52.94% of JavaScript online submissions for Remove Outermost Parentheses.
