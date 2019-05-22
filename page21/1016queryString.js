/**
* 1016. Binary String With Substrings Representing 1 To N
* https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/
*/

/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function(S, N) {
  for (let i = 1; i <= N; i ++) {
    if (S.indexOf(i.toString(2)) === -1) return false;
  }
  return true;
};

// Runtime: 48 ms, faster than 99.36% of JavaScript online submissions for Binary String With Substrings Representing 1 To N.
// Memory Usage: 34 MB, less than 20.27% of JavaScript online submissions for Binary String With Substrings Representing 1 To N.
