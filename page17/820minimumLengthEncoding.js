/**
* 820. Short Encoding of Words
* https://leetcode.com/problems/short-encoding-of-words/
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  words.sort((a, b) => a.length - b.length);
  let len = 0;
  for (let i = 0; i < words.length; i ++) {
    let hasContainer = false;
    for (let j = i + 1; j < words.length; j ++) {
      let idx = words[j].indexOf(words[i]);
      if (words[j].length - words[i].length === idx) {
        hasContainer = true;
        break;
      }
    }
    if (!hasContainer) {
      len += words[i].length + 1;
    }
  }
  return len;
};

// Runtime: 1160 ms, faster than 9.52% of JavaScript online submissions for Short Encoding of Words.
// Bruteforce

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  words.sort((a, b) => b.length - a.length);
  let head = new TrieNode();
  let len = 0;
  for (let word of words) {
    let node = head;
    let isIndp = false;
    for (let i = word.length - 1; i >= 0; i--) {
      if (node.next[word[i]] == null) {
        node.next[word[i]] = new TrieNode();
        isIndp = true;
      }
      node = node.next[word[i]];
    }
    if (isIndp) len += word.length + 1;
  }
  return len;
};

class TrieNode {
  constructor () {
    this.next = {};
  }
}

// Runtime: 156 ms, faster than 33.33% of JavaScript online submissions for Short Encoding of Words.
