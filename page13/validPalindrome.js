/**
* 680. Valid Palindrome II
* https://leetcode.com/problems/valid-palindrome-ii/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] === s[r]) {
      l ++;
      r --;
    } else {
      break;
    }
  }
  if (l >= r) {
    return true;
  } else {
    return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
  }
};

function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l ++;
    r --;
  }
  return true;
}

// Runtime: 92 ms, faster than 99.57% of JavaScript online submissions for Valid Palindrome II.
