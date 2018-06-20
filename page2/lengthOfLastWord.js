/**
* Length of Last Word
* https://leetcode.com/problems/length-of-last-word/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0;
  let meetChar = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (meetChar) {
        break;
      } else {
        continue;
      }
    } else {
      meetChar = true;
    }
    count ++;
  }
  return count;
};
