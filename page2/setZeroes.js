/**
* 73. Set Matrix Zeroes
* https://leetcode.com/problems/set-matrix-zeroes/description/
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let rows = [];
  let cols = [];
  let i, j, zeroIndex, hasZero;
  for (i = 0; i < matrix.length; i ++) {
    zeroIndex = 0;
    hasZero = false;
    while (zeroIndex >= 0) {
      zeroIndex = matrix[i].indexOf(0, zeroIndex);
      if (zeroIndex !== -1) {
        cols.push(zeroIndex);
        hasZero = true;
        zeroIndex ++;
      }
    }
    if (!hasZero) {
      rows.push(i);
    } else {
      matrix[i].fill(0);
    }
  }
  for (i = 0; i < rows.length; i ++) {
    for (j = 0; j < cols.length; j ++) {
      matrix[rows[i]][cols[j]] = 0;
    }
  }
};

let matrix = [
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
];

setZeroes(matrix);
