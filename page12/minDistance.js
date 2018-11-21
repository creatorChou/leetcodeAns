/**
* 583. Delete Operation for Two Strings
* https://leetcode.com/problems/delete-operation-for-two-strings/
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let new1 = "", new2 = "", count = 0;
  for (let c of word1) {
    if (word2.indexOf(c) !== -1) new1 += c;
  }
  for (let c of word2) {
    if (word1.indexOf(c) !== -1) new2 += c;
  }
  count += word1.length - new1.length;
  count += word2.length - new2.length;
  
  return word1.length + word2.length;
};
