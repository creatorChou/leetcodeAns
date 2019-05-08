/**
* 953. Verifying an Alien Dictionary
* https://leetcode.com/problems/verifying-an-alien-dictionary/
*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  let orderOfIndex = new Array(26);
  for (let i = 0; i < 26; i ++) {
    let idx = order[i].codePointAt() - 97;
    orderOfIndex[idx] = i;
  }
  let memo = [];
  for (let i = 0; i < words[0].length; i ++) {
    let idx = words[0][i].codePointAt() - 97;
    memo.push(orderOfIndex[idx]);
  }
  for (let i = 1; i < words.length; i ++) {
    let newWordMemo = [];
    for (let j = 0; j < words[i].length; j ++) {
      let idx = words[i][j].codePointAt() - 97;
      newWordMemo.push(orderOfIndex[idx]);
    }
    for (let j = 0; j < memo.length; j ++) {
      if (newWordMemo[j] == null) return false;
      if (memo[j] < newWordMemo[j]) break;
      if (memo[j] > newWordMemo[j]) return false;
    }
    memo = newWordMemo;
  }
  return true;
};

// Runtime: 80 ms, faster than 12.09% of JavaScript online submissions for Verifying an Alien Dictionary.
// Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions for Verifying an Alien Dictionary.
