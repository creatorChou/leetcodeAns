/**
* 392. Is Subsequence
* https://leetcode.com/problems/is-subsequence/description/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length === 0) return true;
  let matchLen = 0,
      head = 0;
  for (let i = 0; i < t.length; i ++) {
    if (t[i] === s[head]) {
      matchLen ++;
      head ++;
      if (matchLen === s.length) {
        return true;
      }
    }
  }
  return false;
};
