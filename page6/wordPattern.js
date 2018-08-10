/**
* 290. Word Pattern
* https://leetcode.com/problems/word-pattern/description/
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let strArr = [], word = "";
  for (let i = 0; i < str.length; i ++) {
    if (str[i] === " ") {
      if (word !== "") {
        strArr.push(word);
        word = "";
      }
    } else {
      word += str[i];
    }
  }
  if (word !== "") {
    strArr.push(word);
    word = "";
  }
  if (strArr.length !== pattern.length) return false;
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < pattern.length; i ++) {
    if (map1.has(pattern[i])) {
      if (map1.get(pattern[i]) !== strArr[i]) {
        return false;
      }
    } else {
      map1.set(pattern[i], strArr[i]);
    }
    if (map2.has(strArr[i])) {
      if (map2.get(strArr[i]) !== pattern[i]) {
        return false;
      }
    } else {
      map2.set(strArr[i], pattern[i]);
    }
  }
  return true;
};
