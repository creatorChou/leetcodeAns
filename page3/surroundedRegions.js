/**
* Surrounded Regions
* https://leetcode.com/problems/surrounded-regions/description/
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length === 0) return;
  let len = board.length,
      innerLen = board[0].length,
      i, j;
  for (i = 0; i < len; i ++) {
    if (board[i][0] === "O") {
      findO(i, 0);
    }
    if (board[i][innerLen-1] === "O") {
      findO(i, innerLen-1);
    }
  }
  for (i = 0; i < innerLen; i ++) {
    if (board[0][i] === "O") {
      findO(0, i);
    }
    if (board[len-1][i] === "O") {
      findO(len-1, i);
    }
  }
  console.log(board);
  for (i = 0; i < len; i ++) {
    for (j = 0; j < innerLen; j ++) {
      if (board[i][j] === "K") {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
  function findO (x, y) {
    board[x][y] = "K";
    if (board[x-1] && board[x-1][y] && board[x-1][y] === "O") {
      findO(x-1, y);
    }
    if (board[x+1] && board[x+1][y] && board[x+1][y] === "O") {
      findO(x+1, y);
    }
    if (board[x][y-1] && board[x][y-1] === "O") {
      findO(x, y-1);
    }
    if (board[x][y+1] && board[x][y+1] === "O") {
      findO(x, y+1);
    }
  }
};

// let board = [
//   ["X","O","X","O","X","O","O","O","X","O"],
//   ["X","O","O","X","X","X","O","O","O","X"],
//   ["O","O","O","O","O","O","O","O","X","X"],
//   ["O","O","O","O","O","O","X","O","O","X"],
//   ["O","O","X","X","O","X","X","O","O","O"],
//   ["X","O","O","X","X","X","O","X","X","O"],
//   ["X","O","X","O","O","X","X","O","X","O"],
//   ["X","X","O","X","X","O","X","O","O","X"],
//   ["O","O","O","O","X","O","X","O","X","O"],
//   ["X","X","O","X","X","X","X","O","O","O"]
// ]

let board = [
  ["X","O","X","O","X","O"],
  ["O","X","O","X","O","X"],
  ["X","O","X","O","X","O"],
  ["O","X","O","X","O","X"]
]
solve(board);
console.log()
console.log(board);


[
  ["X","O","X","O","X","O","O","O","X","O"],
  ["X","O","O","X","X","X","O","O","O","X"],
  ["O","O","O","O","O","O","O","O","X","X"],
  ["O","O","O","O","O","O","X","O","O","X"],
  ["O","O","X","X","O","X","X","O","O","O"],
  ["X","O","O","X","X","X","X","X","X","O"],
  ["X","O","X","X","X","X","X","O","X","O"],
  ["X","X","O","X","X","X","X","O","O","X"],
  ["O","O","O","O","X","X","X","O","X","O"],
  ["X","X","O","X","X","X","X","O","O","O"]]