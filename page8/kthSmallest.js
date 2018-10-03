/**
*	378. Kth Smallest Element in a Sorted Matrix
*	https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  let len = matrix[0].length,
      min = matrix[0][0],
      max = matrix[matrix.length - 1][len - 1];
  while (min < max) {
    let mid = Math.floor((min + max) / 2);
    let count = 0;
    let j = len - 1;
    for (let i = 0; i < matrix.length; i ++) {
      while (j >= 0 && matrix[i][j] > mid) j --;
      count += j + 1;
      console.log(count, j)
    }
    console.log("mid:" + mid + ",count:" + count)
    if (count < k) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }
  return min;
};

let m = [
  [ 1,  2,  3],
  [4, 5, 6],
  [7, 100, 150]
];

console.log(kthSmallest(m, 7));
