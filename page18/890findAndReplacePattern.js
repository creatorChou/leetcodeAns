/**
* 890. Find and Replace Pattern
* https://leetcode.com/problems/find-and-replace-pattern/
*/

/**
  You have a list of words and a pattern, and you want to know which words in words matches the pattern.
  A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
  (Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.)
  Return a list of the words in words that match the given pattern. 
  You may return the answer in any order.
*/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  let results = [];
  for (let word of words) {
    let mapWord = {};
    let mapPatten = {};
    let isMatch = true;
    for (let i = 0; i < pattern.length; i ++) {
      if (!mapWord[word[i]] && !mapPatten[pattern[i]]) {
        mapWord[word[i]] = pattern[i];
        mapPatten[pattern[i]] = word[i];
      } else {
        if (mapWord[word[i]] !== pattern[i] || mapPatten[pattern[i]] !== word[i]) {
          isMatch = false;
          break;
        }
      }
    }
    if (isMatch) results.push(word);
  }
  return results;
};

// Runtime: 64 ms, faster than 68.00% of JavaScript online submissions for Find and Replace Pattern.
// Memory Usage: 34.7 MB, less than 62.50% of JavaScript online submissions for Find and Replace Pattern.
