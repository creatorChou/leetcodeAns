/**
* 214. Shortest Palindrome
* https://leetcode.com/problems/shortest-palindrome/description/
*/

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  let ss = s;
  let start = 0, cut;
  for (let i = s.length; i >= 0; i --) {
    cut = s.slice(0, i);
    if (isPal(cut)) {
      start = i;
      break;
    }
  }
  let res = s;
  for (let i = start; i < s.length; i ++) {
    res = s[i] + res;
  }
  return res;
};

function isPal (s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l ++;
    r --;
  }
  return true;
}

console.log(shortestPalindrome("aacecaaa"));
