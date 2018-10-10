/**
* 419. Battleships in a Board
* https://leetcode.com/problems/battleships-in-a-board/description/
*/

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  if (!board || !board[0] || !board[0].length) return 0;
  let count = 0;
  let len = board[0].length;
  for (let i = 0; i < board.length; i ++) {
    for (let j = 0; j < len; j ++) {
      if (board[i][j] === "X") {
        count ++;
        if (board[i + 1] && board[i + 1][j] === "X") {
          modifyShipToSlot(board, i, j, "v");
        } else if (board[i][j + 1] === "X") {
          modifyShipToSlot(board, i, j, "h");
        }
      }
    }
  }
  return count;
};

function modifyShipToSlot (board, i, j, direction) {
  if (direction === "v") {
    for (; i < board.length; i ++) {
      if (board[i][j] === "X") {
        board[i][j] = ".";
      } else {
        break;
      }
    }
  } else {
    for (; j < board[0].length; j ++) {
      if (board[i][j] === "X") {
        board[i][j] = ".";
      } else {
        break;
      }
    }
  }
}

// 25%
