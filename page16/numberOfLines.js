/**
* 806. Number of Lines To Write String
* https://leetcode.com/problems/number-of-lines-to-write-string/
*/

/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  let line = 1;
  let units = 0;
  for (let c of S) {
    unit = widths[c.codePointAt() - 97];
    if (units + unit > 100) {
      line ++;
      units = unit;
    } else if (units + unit < 100) {
      units += unit;
    } else {
      line ++;
      units = 0;
    }
  }
  if (units === 0) line --;
  return [line, units];
};

// Runtime: 56 ms, faster than 67.54% of JavaScript online submissions for Number of Lines To Write String.
