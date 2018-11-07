/**
* Concatenated Words
* https://leetcode.com/problems/concatenated-words/
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  let trie = new Trie(words);
  let result = [];
  for (let i = 0; i < words.length; i ++) {
    if(trie.isConcatenated(words[i])) {
      result.push(words[i]);
    }
  }
  return result;
};

class TrieNode {
  constructor (char) {
    this.val = char;
    this.next = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor (words) {
    this.head = new TrieNode(null);
    for (let i = 0; i < words.length; i ++) {
      this.add(words[i]);
    }
    this.concatenatedMap = {};
  }

  add (str) {
    let node = this.head;
    let rest = [];
    for (let i = 0; i < str.length; i ++) {
      if (!node.next[str[i]]) {
        node.next[str[i]] = new TrieNode(str[i]);
      }
      node = node.next[str[i]];
    }
    node.isEnd = true;
  }

  has (str) {
    let node = this.head;
    for (let i = 0; i < str.length; i ++) {
      if (node.next[str[i]]) {
        node = node.next[str[i]];
      } else {
        return false;
      }
    }
    return node.isEnd;
  }

  isConcatenated (str) {
    if (this.concatenatedMap[str] != null && this.concatenatedMap[str].size >= 2) return true;
    let node = this.head;
    for (let i = 0; i < str.length; i ++) {
      if (node.next[str[i]] != null) {
        node = node.next[str[i]];
        if (node.isEnd) {
          let prefix = str.slice(0, i + 1);
          let after = str.slice(i + 1);
          if (this.has(after)) {
            if (after.length > 0) {
              this.concatenatedMap[str] = new Set([prefix, after]);
              return true;
            }
          } else if (this.isConcatenated(after)) {
            this.concatenatedMap[str] = new Set(this.concatenatedMap[after]);
            this.concatenatedMap[str].add(prefix);
            return true;
          }
        }
      } else {
        return false;
      }
    }
    return false;
  }

}
