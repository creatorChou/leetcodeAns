/**
* 884. Uncommon Words from Two Sentences
* https://leetcode.com/problems/uncommon-words-from-two-sentences/
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  let words = A.split(" ").concat(B.split(" "));
  let map = {};
  for (let word of words) {
    if (map[word] == null) {
      map[word] = true;
    } else {
      map[word] = false;
    }
  }
  let result = [];
  for (let word in map) {
    if (map[word]) result.push(word);
  }
  return result;
};

// 72 ms
