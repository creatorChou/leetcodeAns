/**
* 119. Pascal's Triangle II
* https://leetcode.com/problems/pascals-triangle-ii/description/
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let arr = [];
  for (let i = 0; i < rowIndex + 1; i ++) {
    arr.push(C(rowIndex, i));
  }
  return arr;
};

var C = function (n, m) {
  console.log(n, m);
  let facN = 1, facM = 1, facMN = 1, distance = n - m;
  for (let i = 1; i <= n; i ++) {
    facN *= i;
    if (i <= m) {
      facM *= i;
    }
    if (i <= distance) {
      facMN *= i;
    }
  }
  return facN / (facM * facMN);
}

console.log(getRow(5));
