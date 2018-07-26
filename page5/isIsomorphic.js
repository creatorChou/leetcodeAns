/**
* 205. Isomorphic Strings
* https://leetcode.com/problems/isomorphic-strings/description/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let map1 = {}, map2 = {};
  for (var i = 0; i < s.length; i ++) {
    if (map1[s[i]]) {
      if (map1[s[i]] !== t[i]) {
        return false;
      }
    } else {
      map1[s[i]] = t[i];
    }
    if (map2[t[i]]) {
      if (map2[t[i]] !== s[i]) {
        return false;
      }
    } else {
      map2[t[i]] = s[i];
    }
  }
  return true;
};
