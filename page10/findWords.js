/**
* Keyboard Row
* https://leetcode.com/problems/keyboard-row/
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let rows = {
    row1: new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]),
    row2: new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"]),
    row3: new Set(["z", "x", "c", "v", "b", "n", "m"])
  }
  let result = [];
  for (let i = 0; i < words.length; i ++) {
    let target = words[i].toLowerCase();
    let rowNum;
    if (rows.row1.has(target[0])) {
      rowNum = rows.row1;
    } else if (rows.row2.has(target[0])) {
      rowNum = rows.row2;
    } else if (rows.row3.has(target[0])) {
      rowNum = rows.row3;
    }
    if (rowNum) {
      let allInRow = true;
      for (let i = 1; i < target.length; i ++) {
        if (!rowNum.has(target[i])) {
          allInRow = false;
          break;
        }
      }
      if (allInRow) {
        result.push(words[i]);
      }
    }
  }
  return result;
};
