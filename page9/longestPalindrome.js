/**
*  409. Longest Palindrome
*  https://leetcode.com/problems/longest-palindrome/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let map = {};
  for (let i = 0; i < s.length; i ++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]] ++;
    }
  }
  let ret = 0,
      hasSingle = false;
  for (let i in map) {
    if (map[i] % 2 === 1) {
      hasSingle = true;
      ret += map[i] - 1;
    } else {
      ret += map[i];
    }
  }
  return ret + hasSingle;
};
