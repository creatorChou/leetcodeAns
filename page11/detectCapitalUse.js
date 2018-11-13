/**
* 520. Detect Capital
* https://leetcode.com/problems/detect-capital/
*/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (!word) return false;
  if (word.length === 1) return true;
  let last = word.codePointAt(word.length - 1);
  let isCapital = last >= 65 && last <= 90;
  for (let i = word.length - 2; i >= 1; i --) {
    let code = word.codePointAt(i);
    if (isCapital && code > 90 || !isCapital && code <= 90) {
      return false;
    }
  }
  if (isCapital && word.codePointAt(0) > 90) {
    return false;
  }
  return true;
};

// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Detect Capital.
