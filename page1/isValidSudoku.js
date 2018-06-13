/**
* Valid Sudoku
* https://leetcode.com/problems/valid-sudoku/description/
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let rows = [[], [], [], [], [], [], [], [], []];
  let cols = [[], [], [], [], [], [], [], [], []];
  let subBoxes = [[], [], [], [], [], [], [], [], []];
  let i, j, num, subBoxesArr;
  for (i = 0; i < 9; i ++) {
    for (j = 0; j < 9; j ++) {
      num = board[i][j];
      if (num === ".") {
        continue;
      }
      if (rows[i].indexOf(num) !== -1) {
        return false;
        rows[i].push(num);
      } else {
        rows[i].push(num);
      }
      if (cols[j].indexOf(num) !== -1) {
        return false;
        cols[j].push(num);
      } else {
        cols[j].push(num);
      }
      if (i >= 0 && i <= 2) {
        if (j >= 0 && j <= 2) {
          subBoxesArr = subBoxes[0];
        } else if (j >=3 && j <= 5) {
          subBoxesArr = subBoxes[1];
        } else if (j >= 6 && j <= 8) {
          subBoxesArr = subBoxes[2];
        }
      } else if (i >= 3 && i <= 5) {
        if (j >= 0 && j <= 2) {
          subBoxesArr = subBoxes[3];
        } else if (j >=3 && j <= 5) {
          subBoxesArr = subBoxes[4];
        } else if (j >= 6 && j <= 8) {
          subBoxesArr = subBoxes[5];
        }
      } else if (i >= 6 && i <= 8) {
        if (j >= 0 && j <= 2) {
          subBoxesArr = subBoxes[6];
        } else if (j >=3 && j <= 5) {
          subBoxesArr = subBoxes[7];
        } else if (j >= 6 && j <= 8) {
          subBoxesArr = subBoxes[8];
        }
      }
      if (subBoxesArr.indexOf(num) !== -1) {
        return false;
      } else {
        subBoxesArr.push(num);
      }
    }
  }
  return true;
};

let input = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(input));
