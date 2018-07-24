/**
* 168. Excel Sheet Column Title
* https://leetcode.com/problems/excel-sheet-column-title/description/
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let column = "";
  while (n > 26) {
    column = String.fromCharCode(65 + --n % 26) + column;
    n = Math.floor(n / 26);
  }
  return String.fromCharCode(65 + n - 1) + column;
};

console.log(convertToTitle(28));
