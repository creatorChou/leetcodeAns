/**
* 387. First Unique Character in a String
* https://leetcode.com/problems/first-unique-character-in-a-string/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = {};
  for (let i = 0; i < s.length; i ++) {
    if (typeof map[s[i]] === "undefined") {
      map[s[i]] = i;
    } else {
      map[s[i]] = false;
    }
  }
  let result = -1;
  for (let i in map) {
    if (map[i] !== false) {
      if (result === -1) {
        result = map[i];
      } else {
        result = Math.min(result, map[i]);
      }
    }
  }
  return result;
};
