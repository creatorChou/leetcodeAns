/**
* 211. Add and Search Word - Data structure design
* https://leetcode.com/problems/add-and-search-word-data-structure-design/description/
*/

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.trie = new Trie();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.trie,
      newNode;
  for (let i = 0; i < word.length; i ++) {
    if (node.nexts[word[i]]) {
      newNode = node.nexts[word[i]];
    } else {
      newNode = new Trie();
      node.nexts[word[i]] = newNode;
    }
    node = newNode;
  }
  node.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return _search(word, 0, this.trie);
};

function Trie () {
  this.isEnd = false;
  this.nexts = {};
}

function _search (word, index, node) {
  if (index === word.length) {
    return node.isEnd;
  }
  let char = word[index];
  if (char === ".") {
    for (let key in node.nexts) {
      if (_search(word, index + 1, node.nexts[key])) {
        return true;
      }
    }
    return false;
  } else {
    if (node.nexts[char]) {
      return _search(word, index + 1, node.nexts[char]);
    } else {
      return false;
    }
  }
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let wd = new WordDictionary();
wd.addWord("bad");
wd.addWord("dad");
wd.addWord("mad");
console.log(wd.search("pad"));
console.log(wd.search("bad"));
console.log(wd.search(".ad"));
console.log(wd.search("b.."));
