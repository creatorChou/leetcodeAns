/**
* 22.Generate Parentheses
* https://leetcode.com/problems/generate-parentheses/description/
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let results = [];
  helper (results, "", n, n);
  return results;
};

function helper (results, str, l, r) {
  if (r > l) return;
  if (l === 0 && r === 0) {
    results.push(str);
    return;
  }
  if (l > 0) {
    helper(results, str + "(", l - 1, r);
  }
  if (r > 0) {
    helper(results, str + ")", l, r - 1);
  }
}

// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Generate Parentheses.
