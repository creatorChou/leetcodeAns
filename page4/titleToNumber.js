/**
* 171. Excel Sheet Column Number
* https://leetcode.com/problems/excel-sheet-column-number/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let num = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    num += (s[i].charCodeAt() - 64) * Math.pow(26, s.length - 1 - i);
  }
  return num;
};

console.log(titleToNumber("AZ"));
