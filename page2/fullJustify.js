/**
* 68. Text Justification
* https://leetcode.com/problems/text-justification/description/
*/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let i, j;
  let result = [];
  let arr = [], len = 0, spaceLength, restSpace, spaceStr, rowStr;
  for (i = 0; i < words.length; i ++) {
    arr.push(words[i]);
    len += words[i].length;
    if (len + arr.length - 1 > maxWidth) {
      arr.pop();
      len -= words[i].length;
      if (arr.length > 1) {
        spaceLength = Math.floor((maxWidth - len) / (arr.length - 1));
        restSpace = (maxWidth - len) % (arr.length - 1);
        spaces = new Array(arr.length - 1);
      } else {
        spaceLength = maxWidth - len;
        restSpace = 0;
        spaces = new Array(1);
      }
      spaceStr = "";
      for (j = 0; j < spaceLength; j ++) {
        spaceStr += " ";
      }
      spaces.fill(spaceStr);
      for (j = 0; j < spaces.length; j ++) {
        if (restSpace > 0) {
          restSpace --;
          spaces[j] += " ";
        } else {
          break;
        }
      }
      rowStr = "";
      for (j = 0; j < arr.length; j++) {
        rowStr += arr[j] + (spaces[j] || "");
      }
      result.push(rowStr);
      arr = [words[i]];
      len = words[i].length;
    }
    if (i === words.length - 1) {
      rowStr = arr.join(" ");
      while (rowStr.length < maxWidth) {
        rowStr += " ";
      }
      result.push(rowStr);
    }
  }
  return result;
};

console.log(fullJustify(["What","must","be","acknowledgment","shall","be"],16));
