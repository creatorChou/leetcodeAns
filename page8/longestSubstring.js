/**
* 395. Longest Substring with At Least K Repeating Characters
* https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  let map = {};
  let noPass = 0;
  for (let i = 0; i < s.length; i ++) {
    if (map[s[i]]) {
      map[s[i]] ++;
    } else {
      map[s[i]] = 1;
    }
  }
  let pass = true;
  for (let i in map) {
    if (map[i] < k) {
      pass = false;
      break;
    }
  }
  if (pass) {
    return s.length;
  }
  let start = 0;
  let max = 0;
  for (let i = 0; i < s.length; i ++) {
    if (map[s[i]] < k) {
      if (i + start >= k) {
        max = Math.max(max, longestSubstring(s.slice(start, i), k));
      }
      start = i + 1;
    }
  }
  max = Math.max(max, longestSubstring(s.slice(start), k));
  return max;
};

console.log(longestSubstring("bbaaacbd", 3));
