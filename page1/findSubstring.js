/**
* Substring with Concatenation of All Words
* https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (s.length === 0 || words.length === 0) return [];
  let expectLength = words[0].length;
  let firstLetters = "":
  for (let i = 0; i < words.length; i ++) {
    if (words[i].length !== expectLength) return [];
    firstLetters += words[i][0];
  }
};
