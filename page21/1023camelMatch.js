/**
* 1023. Camelcase Matching
* https://leetcode.com/problems/camelcase-matching/
*/

/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
  let p = "^";
  for (var i = 0; i < pattern.length; i ++) {
    p += "[a-z]*";
    p += pattern[i];
  }
  p += "[a-z]*$";
  let reg = new RegExp(p);
  let ans = [];
  for (let q of queries) {
    ans.push(reg.test(q));
  }
  return ans;
};

// Runtime: 56 ms, faster than 97.62% of JavaScript online submissions for Camelcase Matching.
// Memory Usage: 33.8 MB, less than 78.47% of JavaScript online submissions for Camelcase Matching.
