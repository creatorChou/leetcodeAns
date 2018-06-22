/**
* 74. Search a 2D Matrix
* https://leetcode.com/problems/search-a-2d-matrix/description/
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let i, matchRowIndex;
  for (i = 0; i < matrix.length; i ++) {
    if (matrix[i][0] > target) {
      break;
    } else if (matrix[i][0] === target) {
      return true;
    } else {
      matchRowIndex = i;
    }
  }
  let matchRow = matrix[matchRowIndex];
  let len = matchRow.length;
  if (matchRow[len - 1] < target) {
    return false;
  }
  let l = 0,
      r = len - 1,
      mid;

  while (l < r) {
    if (matchRow[l] === target || matchRow[r] === target) {
      return true;
    }
    mid = Math.floor((l + r) / 2);
    if (matchRow[mid] > target) {
      r = --mid;
    } else if (matchRow[mid] < target) {
      l = ++ mid;
    } else {
      return true;
    }
  }
  return false;
};

let matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];

console.log(searchMatrix(matrix, 11));
