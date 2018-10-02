/**
* 383. Ransom Note
* https://leetcode.com/problems/ransom-note/description/
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let letters = {};
  for (let i = 0; i < magazine.length; i ++) {
    if (letters[magazine[i]] == null) {
      letters[magazine[i]] = 1;
    } else {
      letters[magazine[i]] ++;
    }
  }
  for (let i = 0; i < ransomNote.length; i ++) {
    if (!letters[ransomNote[i]]) return false;
    letters[ransomNote[i]] --;
  }
  return true;
};
