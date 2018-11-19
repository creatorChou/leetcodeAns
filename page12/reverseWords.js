/**
* 557. Reverse Words in a String III
* https://leetcode.com/problems/reverse-words-in-a-string-iii/
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let ss = "";
  let temp = "";
  for (let c of s) {
    if (c === " ") {
      ss += temp + c;
      temp = "";
    } else {
      temp = c + temp;
    }
  }
  ss += temp;
  return ss;
};
