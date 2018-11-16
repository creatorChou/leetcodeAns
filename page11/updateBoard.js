/**
* 529. Minesweeper
* https://leetcode.com/problems/minesweeper/
*/

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  if (!board[click[0]] || !board[click[0]][click[1]]) return board;
  if (board[click[0]][click[1]] !== "E") {
    if (board[click[0]][click[1]] === "M") {
      board[click[0]][click[1]] = "X";
    }
    return board;
  }
  let h = board.length;
  let w = board[0].length;
  for (let i = 0; i < h; i ++) {
    for (let j = 0; j < w; j ++) {
      if (board[i][j] === "M") {
        let mines = new Set();
        searchAdjacentMines(board, i, j, mines);
        changeEToDigit(board, mines);
      }
    }
  }
  changeEToB(board, click[0], click[1]);
  for (let i = 0; i < h; i ++) {
    for (let j = 0; j < w; j ++) {
      if (/[1-8]{1}/.test(board[i][j]) && hasNoAdjacentB(board, i, j)) {
        board[i][j] = "E";
      }
    }
  }
  return board;
};

function changeEToB(board, i, j) {
  if (!board[i] || !board[i][j] || board[i][j] !== "E") return;
  board[i][j] = "B";
  changeEToB(board, i + 1, j);
  changeEToB(board, i - 1, j);
  changeEToB(board, i, j + 1);
  changeEToB(board, i, j - 1);
}

function searchAdjacentMines(board, i, j, mines) {
  if (!board[i] || board[i][j] !== "M") return;
  let key = `${i}-${j}`;
  if (mines.has(key)) return;
  mines.add(key);
  board[i][j] = "MA";
  searchAdjacentMines(board, i + 1, j, mines);
  searchAdjacentMines(board, i - 1, j, mines);
  searchAdjacentMines(board, i, j + 1, mines);
  searchAdjacentMines(board, i, j - 1, mines);
}

function changeEToDigit(board, mines) {
  let digit = String(mines.size);
  mines.forEach(val => {
    let pos = val.split("-");
    let i = parseInt(pos[0]);
    let j = parseInt(pos[1]);
    if (board[i-1]) {
      if (board[i-1][j] === "E") {
        board[i-1][j] = digit;
      }
      if (board[i-1][j-1] === "E") {
        board[i-1][j-1] = digit;
      }
      if (board[i-1][j+1] === "E") {
        board[i-1][j+1] = digit;
      }
    }
    if (board[i+1]) {
      if (board[i+1][j] === "E") {
        board[i+1][j] = digit;
      }
      if (board[i+1][j-1] === "E") {
        board[i+1][j-1] = digit;
      }
      if (board[i+1][j+1] === "E") {
        board[i+1][j+1] = digit;
      }
    }
    if (board[i][j-1] === "E") {
      board[i][j-1] = digit;
    }
    if (board[i][j+1] === "E") {
      board[i][j+1] = digit;
    }
    board[i][j] = "M";
  });
}

function hasNoAdjacentB(board, i, j) {
  if (board[i-1] && board[i-1][j] === "B") {
    return false;
  }
  if (board[i+1] && board[i+1][j] === "B") {
    return false;
  }
  if (board[i][j+1] === "B") {
    return false;
  }
  if (board[i][j-1] === "B") {
    return false;
  }
  return true;
}

[
["B","1","E","1","B"],
["B","1","M","1","B"],
["B","1","1","1","B"],
["B","B","B","B","B"]
]
[1,2]
