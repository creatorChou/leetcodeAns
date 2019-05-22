/**
* Sudoku Solver
* https://leetcode.com/problems/sudoku-solver/description/
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  let LEN = 9;
  let rows = new Array(LEN);
  let cols = new Array(LEN);
  let groups = new Array(LEN);
  let available = [1,2,3,4,5,6,7,8,9];
  for (let i = 0; i < LEN; i ++) {
    rows[i] = new Set(available);
    cols[i] = new Set(available);
    groups[i] = new Set(available);
  }
  for (let i = 0; i < LEN; i ++) {
    for (let j = 0; j < LEN; j ++) {
      if (board[i][j] !== ".") {
        let num = parseInt(board[i][j]);
        rows[i].delete(num);
        cols[j].delete(num);
        groups[getGroupIndex(i, j)].delete(num);
      }
    }
  }
  fillBoard(board, 0, 0, rows, cols, groups);
  console.log(board)
  return board;
};


function fillBoard(board, i, j, rows, cols, groups) {
  let LEN = 9;
  if (i === LEN) return true;
  let nextI, nextJ;
  if (j === LEN - 1) {
    nextI = i + 1;
    nextJ = 0;
  } else {
    nextI = i;
    nextJ = j + 1;
  }
  if (board[i][j] !== ".") {
    return fillBoard(board, nextI, nextJ, rows, cols, groups);
  }
  let groupIdx = getGroupIndex(i, j);
  for (let k = 1; k <= LEN; k ++) {
    if (rows[i].has(k) && cols[j].has(k) && groups[groupIdx].has(k)) {
      rows[i].delete(k);
      cols[j].delete(k);
      groups[groupIdx].delete(k);
      board[i][j] = k + "";
      let res = fillBoard(board, nextI, nextJ, rows, cols, groups);
      if (!res) {
        rows[i].add(k);
        cols[j].add(k);
        groups[groupIdx].add(k);
        board[i][j] = ".";
      } else {
        return true;
      }
    }
  }
  return false;
}

function getGroupIndex(i, j) {
  if (i <= 2) {
    if (j <= 2) {
      return 0;
    } else if (j > 2 && j <= 5) {
      return 1;
    } else {
      return 2;
    }
  } else if (i > 2 && i <= 5) {
    if (j <= 2) {
      return 3;
    } else if (j > 2 && j <= 5) {
      return 4;
    } else {
      return 5;
    }
  } else {
    if (j <= 2) {
      return 6;
    } else if (j > 2 && j <= 5) {
      return 7;
    } else {
      return 8;
    }
  }
}


// let input = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];

let input = [
  [".","5",".",".",".",".",".","2","."],
  ["4",".",".","2",".","6",".",".","7"],
  [".",".","8",".","3",".","1",".","."],
  [".","1",".",".",".",".",".","6","."],
  [".",".","9",".",".",".","5",".","."],
  [".","7",".",".",".",".",".","9","."],
  [".",".","5",".","8",".","3",".","."],
  ["7",".",".","9",".","1",".",".","4"],
  [".","2",".",".",".",".",".","7","."]
];

solveSudoku(input);

// Runtime: 84 ms, faster than 80.84% of JavaScript online submissions for Sudoku Solver.
// Memory Usage: 37.5 MB, less than 34.78% of JavaScript online submissions for Sudoku Solver.


[ 
  [ '1', '5', '7', '4', '9', '8', '6', '2', '3' ],
  [ '4', '9', '3', '2', '1', '6', '8', '5', '7' ],
  [ '2', '6', '8', '5', '3', '7', '1', '4', '9' ],
  [ '5', '1', '4', '3', '2', '9', '7', '6', '8' ],
  [ '6', '8', '9', '1', '7', '4', '5', '3', '2' ],
  [ '3', '7', '2', '8', '6', '5', '4', '9', '1' ],
  [ '9', '4', '5', '7', '8', '2', '3', '1', '6' ],
  [ '7', '3', '6', '9', '5', '1', '2', '8', '4' ],
  [ '8', '2', '1', '6', '4', '3', '9', '7', '5' ] 
]
