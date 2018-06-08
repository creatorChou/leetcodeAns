/**
* ZigZag Conversion
* https://leetcode.com/problems/zigzag-conversion/description/
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (!s || numRows <= 1 || numRows >= s.length) return s;
  let result = new Array(numRows).fill("");
  let currRow = 0;
  let tend = 0; // 0: down; 1: up
  for(let i = 0; i < s.length; i ++) {
    result[currRow] += s[i];
    if (currRow === 0) {
      tend = 0;
    } else if (currRow === result.length - 1) {
      tend = 1;
    }
    if (tend === 0) {
      currRow ++;
    } else if (tend === 1) {
      currRow --;
    }
  }
  return result.join("");
};

let res = convert("PAYPALISHIRING", 4);
console.log(res);
