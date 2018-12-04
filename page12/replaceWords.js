/**
* 648. Replace Words
* https://leetcode.com/problems/replace-words/
*/

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
  let words = sentence.split(" ");
  let tireHead = new TrieNode(null);
  for (let i = 0; i < dict.length; i ++) {
    let node = tireHead;
    for (let char of dict[i]) {
      if (!node.next[char]) {
        node.next[char] = new TrieNode(char);
      }
      node = node.next[char];
    }
    node.isEnd = true;
  }
  for (let i = 0; i < words.length; i ++) {
    let endIdx = 0;
    let word = words[i];
    let node = tireHead;
    while (node) {
      node = node.next[word[endIdx]];
      endIdx ++;
      if (node && node.isEnd) {
        words[i] = word.slice(0, endIdx);
        break;
      }
    }
  }
  return words.join(" ");
};

class TrieNode {
  constructor (val) {
    this.val = val;
    this.next = {};
    this.isEnd = false;
  }
}

// Runtime: 120 ms, faster than 90.16% of JavaScript online submissions for Replace Words.
