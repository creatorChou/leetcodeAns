/**
* 696. Count Binary Substrings
* https://leetcode.com/problems/count-binary-substrings/
*/

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let zero = 0;
  let one = 0;
  let count = 0;
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === "0") {
      if (s[i-1] === "1") {
        zero = 0;
      }
      zero ++;
      if (one > 0) {
        one --;
        count ++;
      }
    } else {
      if (s[i-1] === "0") {
        one = 0;
      }
      one ++;
      if (zero > 0) {
        zero --;
        count ++;
      }
    }
  }
  return count;
};
