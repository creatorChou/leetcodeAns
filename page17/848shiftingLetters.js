/**
* 848. Shifting Letters
* https://leetcode.com/problems/shifting-letters/
*/

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
  let sum = 0;
  let ss = "";
  for (let i = shifts.length - 1; i >= 0; i--) {
    sum += shifts[i];
    let code = sum % 26 + S.codePointAt(i);
    if (code > 122) code -= 26;
    ss = String.fromCodePoint(code) + ss;
  }
  return ss;
};

// Runtime: 92 ms, faster than 33.33% of JavaScript online submissions for Shifting Letters.
