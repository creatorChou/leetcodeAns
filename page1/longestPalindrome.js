/**
* 5.Longest Palindromic Substring
* https://leetcode.com/problems/longest-palindromic-substring/
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  let map = {};
  for (let i = 0; i < s.length; i ++) {
    if (map[s[i]]) {
      map[s[i]].push(i);
    } else {
      map[s[i]] = [i];
    }
  }
  let ss = "";
  for (let i in map) {
    for (let b = 0; b < map[i].length - 1; b ++) {
      for (let e = b + 1; e < map[i].length; e ++) {
        let start = map[i][b];
        let end = map[i][e];
        if (end - start + 1 > ss.length && check(s, start, end)) {
          ss = s.slice(b, e + 1);
        }
      }
    }
  }
  if (ss.length === 0) ss = s[0];
  return ss;
};

function check (s, b, e) {
  while (b < e) {
    if (s[b] !== s[e]) return false;
    b ++;
    e --;
  }
  return true;
}

// 760ms
