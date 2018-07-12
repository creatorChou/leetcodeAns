/**
* 125. Valid Palindrome
* https://leetcode.com/problems/valid-palindrome/description/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/\W|_/g, "").toLowerCase();
  let l = 0;
  let r = s.length - 1;
  while(l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l ++;
    r --;
  }
  return true;
};
