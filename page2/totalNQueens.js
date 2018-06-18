/**
* N-Queens II
* https://leetcode.com/problems/n-queens-ii/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let queens = [];
  return backtrack(queens, n);
};

var backtrack = function(queens, n) {
  if (queens.length === n) {
    return 1;
  }
  let sum = 0;
  for (let i = 0; i < n; i ++) {
    if (check(queens, i)) {
      queens.push(i);
      sum += backtrack(queens, n);
      queens.pop();
    }
  }
  return sum;
}

var check = function(queens, y) {
  let x = queens.length;
  let i, j;
  for (i = 0; i < queens.length; i ++) {
    j = queens[i];
    if (x === i || y === j) {
      return false;
    }
    if (Math.abs(x - i) === Math.abs(y - j)) {
      return false;
    }
  }
  return true;
}

console.log(totalNQueens(8));
