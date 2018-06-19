/*
* Rotate Image
* https://leetcode.com/problems/rotate-image/description/
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let x, y, i;
  let l = matrix.length;
  let p1, p2, p3, p4, temp;
  let round = 0;
  // while (l > 0) {
    x = round;
    y = round;
    // for (i = 0; i < 4; i ++) {
      p1 = [x, y];
      p2 = [y, l - x - 1];
      p3 = [l - x - 1, l - y - 1];
      p4 = [l - y - 1, x];
      console.log(p1, p2, p3, p4);
      matrix[x][y] ^= matrix[y, l - x - 1];
      matrix[y][l - x - 1] ^= matrix[x][y];
      matrix[x][y] ^= matrix[y][l - x - 1];

      matrix[x][y] ^= matrix[l - x - 1][l - y - 1];
      matrix[l - x - 1][l - y - 1] ^= matrix[x][y];
      matrix[x][y] ^= matrix[l - x - 1][l - y - 1];

      matrix[x][y] ^= matrix[l - y - 1][x];
      matrix[l - y - 1][x] ^= matrix[x][y];
      matrix[x][y] ^= matrix[l - y - 1][x];

      // y ++;
    // }
    round ++;
    l -= 2;
  // }
  console.log(matrix);
};


let arr = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];

rotate(arr)
