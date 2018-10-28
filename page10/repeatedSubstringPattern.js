/**
* Repeated Substring Pattern
* https://leetcode.com/problems/repeated-substring-pattern/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  for (let i = 2; i <= s.length; i ++) {
    if (s.length % i === 0) {
      if (s === s.slice(0, s.length / i).repeat(i)) {
        return true;
      }
    }
  }
  return false;
};


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    return (s+s).indexOf(s, 1) < s.length
};
