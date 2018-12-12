/**
* 720. Longest Word in Dictionary
* https://leetcode.com/problems/longest-word-in-dictionary/
*/

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  let set = new Set(words);
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    } else {
      return a < b ? -1 : 1;
    }
  });
  let result = "";
  for (let word of words) {
    if (word.length < result) break;
    if (word < result) continue;
    let str = "";
    let built = true;
    for (let i = 0; i < word.length - 1; i ++) {
      str += word[i];
      if (!set.has(str)) {
        built = false;
        break;
      }
    }
    if (built) {
      result = word;
      break;
    }
  }
  return result;
};

// Runtime: 76 ms, faster than 93.33% of JavaScript online submissions for Longest Word in Dictionary.
