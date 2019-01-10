/**
* 819. Most Common Word
* https://leetcode.com/problems/most-common-word/
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let set = new Set(banned);
  let w = "";
  let memo = {};
  let res = "";
  paragraph = paragraph.toLowerCase();
  paragraph += " ";
  for (let c of paragraph) {
    if (/[a-z]/.test(c)) {
      w += c;
    } else {
      if (w !== "" && !set.has(w)) {
        if (memo[w] == null) {
          memo[w] = 1;
        } else {
          memo[w] ++;
        }
        if (!memo[res] || memo[res] < memo[w]) {
          res = w;
        }
      }
      w = "";
    }
  }
  return res;
};

// Runtime: 60 ms, faster than 89.22% of JavaScript online submissions for Most Common Word.
