/**
* 676. Implement Magic Dictionary
* https://leetcode.com/problems/implement-magic-dictionary/
*/

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
  this.map = {};
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  for (let word of dict) {
    if (this.map[word.length] != null) {
      this.map[word.length].push(word);
    } else {
      this.map[word.length] = [word];
    }
  }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  if (!this.map[word.length]) return false;
  for (let d of this.map[word.length]) {
    let count = 0;
    for (let i = 0; i < d.length; i ++) {
      if (d[i] !== word[i]) {
        count ++;
        if (count > 1) break;
      }
    }
    if (count === 1) return true;
  }
  return false;
};

// Runtime: 52 ms, faster than 97.14% of JavaScript online submissions for Implement Magic Dictionary.
