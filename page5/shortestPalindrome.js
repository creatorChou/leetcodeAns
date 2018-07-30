/**
* 214. Shortest Palindrome
* https://leetcode.com/problems/shortest-palindrome/description/
*/

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  let rev = s.split("").reverse().join("");
  if (s === rev) return s;
  for (let i = s.length - 1; i >= 0; i --) {
    if (s.slice(0, i) === rev.slice(s.length - i)) {
      return rev.slice(0, s.length - i) + s;
    }
  }
  return "";
};

console.log(shortestPalindrome("a"));


var shortestPalindrome = function(s) {
    let left = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[left] === s[i]) {
            left++;
        }
    }
    if (left === s.length)
        return s;
    const subfix = s.substring(left);
    const prefix = subfix.split("").reverse().join("");
    const mid = shortestPalindrome(s.substring(0, left));
    return `${prefix}${mid}${subfix}`;
};
