/**
* 79. Word Search
* https://leetcode.com/problems/word-search/description/
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let i, j;
  let indexs;
  for (i = 0; i < board.length; i ++) {
    for (j = 0; j < board[i].length; j ++) {
      if (board[i][j] === word[0]) {
        indexs = [];
        indexs.push([i, j]);
        if(backtrack(board, word, i, j, 1, indexs)) {
          return true;
        }
      }
    }
  }
  return false;
};

var backtrack = function(board, word, i, j, nextIndex, indexs) {
  if (nextIndex === word.length) {
    return true;
  }
  let char = word[nextIndex];
  if (board[i-1] && board[i-1][j] === char) {
    if (check(i-1, j, indexs)) {
      indexs.push([i-1, j]);
      if(backtrack(board, word, i - 1, j, nextIndex + 1, indexs)) {
        return true;
      }
      indexs.pop();
    }
  }
  if (board[i+1] && board[i+1][j] === char) {
    if (check(i+1, j, indexs)) {
      indexs.push([i+1, j]);
      if(backtrack(board, word, i + 1, j, nextIndex + 1, indexs)) {
        return true;
      }
      indexs.pop();
    }
  }
  if (board[i][j-1] && board[i][j-1] === char) {
    if (check(i, j-1, indexs)) {
      indexs.push([i, j-1]);
      if(backtrack(board, word, i, j - 1, nextIndex + 1, indexs)) {
        return true;
      }
      indexs.pop();
    }
  }
  if (board[i][j+1] && board[i][j+1] === char) {
    if (check(i, j+1, indexs)) {
      indexs.push([i, j+1]);
      if(backtrack(board, word, i, j + 1, nextIndex + 1, indexs)) {
        return true;
      }
      indexs.pop();
    }
  }
  return false;
}

var check = function(i, j, indexs) {
  for (let k = 0; k < indexs.length; k ++) {
    if (indexs[k][0] === i && indexs[k][1] === j) {
      return false;
    }
  }
  return true;
}

let board = [["C","A","A"],["A","A","A"],["B","C","D"]]

let str = "AAB";

console.log(exist(board, str));
