/**
* 127. Word Ladder
* https://leetcode.com/problems/word-ladder/description/
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) {
    return 0;
  }
  let queue = [[beginWord]], count = 0, words, pickList, len, i;
  while (queue.length > 0) {
    len = queue.length;
    for (i = 0; i < len; i ++) {
      words = queue.shift();
      pickList = wordList.filter(word => {
        if (words.indexOf(word) !== -1) return false;
        let diff = 0;
        let compareWord = words[words.length - 1];
        for (let j = 0; j < word.length; j ++) {
          if (word[j] !== compareWord[j]) {
            diff ++;
          }
        }
        return diff < 2;
      });
      if (pickList.indexOf(endWord) !== -1) {
        return count + 1;
      }
      let tempArr;
      for (i = 0; i < pickList.length; i ++) {
        tempArr = words.slice();
        tempArr.push(pickList[i]);
        queue.push(tempArr);
      }
    }
    count ++;
  }
  return count;
};
