/**
* 304. Range Sum Query 2D - Immutable
* https://leetcode.com/problems/range-sum-query-2d-immutable/description/
*/

class NumMatrix {

  constructor (matrix) {
    this.matrix = matrix;
    this.dp = [];
    let i, j;
    for (i = 0; i < matrix.length; i ++) {
      let sum = 0;
      this.dp[i] = [];
      for (j = 0; j < matrix[i].length; j ++) {
        sum += matrix[i][j];
        this.dp[i].push(sum);
      }
    }
  }

  sumRegion (row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i ++) {
      sum += this.dp[i][col2] - this.dp[i][col1] + this.matrix[i][col1];
    }
    return sum;
  }

}
