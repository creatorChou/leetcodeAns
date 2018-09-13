/**
*	336. Palindrome Pairs
*	https://leetcode.com/problems/palindrome-pairs/description/
*/

class TrieNode {
  
  constructor() {
    this.next = new Array(26);
    this.index = -1;
  }

  addWord(word, index) {
    let node = this;
    for (let i = 0; i < word.length; i ++) {
      let index = word.codePointAt(i) - 97;
      if (!node.next[index]) {
        node.next[index] = new TrieNode();
      }
      node = node.next[index];
    }
    node.index = index;
  }

  searchWord(word, index) {
    let node = this;
    for (let i = 0; i < word.length; i ++) {
      let index = word.codePointAt(i) - 97;
      if (!node.next[index]) {
        break;
      }
      node = node.next[index];
    }
    return node.index;
  }
}

/**
 * @param {string[]} words
 * @return {number[][]}
 */
function palindromePairs(words) {
	let root = new TrieNode();
  for (let i = 0; i < words.length; i ++) {
    root.addWord(words[i], i);
  }

};

palindromePairs(["abcd","dcba","lls","s","sssll"]);
