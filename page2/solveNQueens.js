/**
* N-Queens
* https://leetcode.com/problems/n-queens/description/
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let result = [];
  backtrack(result, [], n);
  return result;
};

var backtrack = function(result, chessboard, n) {
  if (chessboard.length === n) {
    let arr = [];
    let strs;
    for (let i = 0; i < n; i ++) {
      strs = new Array(n).fill(".");
      strs[chessboard[i]] = "Q";
      arr.push(strs.join(""));
    }
    result.push(arr);
    return;
  }
  for (let i = 0; i < n; i ++) {
    if (check(chessboard, i)) {
      chessboard.push(i);
      backtrack(result, chessboard, n);
      chessboard.pop();
    }
  }
}

var check = function(chessboard, y) {
  let x = chessboard.length;
  let i, j;
  for (i = 0; i < chessboard.length; i ++) {
    j = chessboard[i];
    if (i === x || j === y) {
      return false;
    }
    if (Math.abs(x - i) === Math.abs(y - j)) {
      return false;
    }
  }
  return true;
}

console.log(solveNQueens(1));
