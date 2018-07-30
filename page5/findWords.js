/**
* 212. Word Search II
* https://leetcode.com/problems/word-search-ii/description/
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  if (!board || board.length === 0 || words.length === 0) return [];
  let len = board[0].length;
  let res = [];
  for (i = 0; i < board.length; i ++) {
    for (j = 0; j < len; j ++) {
      let targetStrings = findTargetString(words, board[i][j]);
      while (targetStrings.length > 0) {
        let points = [[i, j]];
        let target = targetStrings.pop();
        if (board[i][j] === target || findWord(board, i, j, points, target, 1)) {
          if (res.indexOf(target) === -1) {
            res.push(target);
          }
          let targetIndex = words.indexOf(target);
          words.splice(targetIndex, 1);
        }
      }
    }
  }
  return res;
};

function findTargetString (words, preChar) {
  let res = [];
  for (let i = 0; i < words.length; i ++) {
    if (words[i][0] === preChar) {
      res.push(words[i]);
    }
  }
  return res;
}

function findWord (board, i, j, points, target, index) {
  let hasPoint, k, res = false;
  if (board[i + 1] && board[i + 1][j] === target[index] && !res) {
    hasPoint = false;
    for (k = 0; k < points.length; k ++) {
      if (points[k][0] === i + 1 && points[k][1] === j) {
        hasPoint = true;
        break;
      }
    }
    if (!hasPoint) {
      if (index === target.length - 1) {
        res = true;
      } else {
        points.push([i + 1, j]);
        if(findWord(board, i + 1, j, points, target, index + 1)) {
          res = true;
        }
        points.pop();
      }
    }
  }
  if (board[i - 1] && board[i - 1][j] === target[index] && !res) {
    hasPoint = false;
    for (k = 0; k < points.length; k ++) {
      if (points[k][0] === i - 1 && points[k][1] === j) {
        hasPoint = true;
        break;
      }
    }
    if (!hasPoint) {
      if (index === target.length - 1) {
        res = true;
      } else {
        points.push([i - 1, j]);
        if(findWord(board, i - 1, j, points, target, index + 1)) {
          res = true;
        }
        points.pop();
      }
    }
  }
  if (board[i][j + 1] === target[index] && !res) {
    hasPoint = false;
    for (k = 0; k < points.length; k ++) {
      if (points[k][0] === i && points[k][1] === j + 1) {
        hasPoint = true;
        break;
      }
    }
    if (!hasPoint) {
      if (index === target.length - 1) {
        res = true;
      } else {
        points.push([i, j + 1]);
        if(findWord(board, i, j + 1, points, target, index + 1)) {
          res = true;
        }
        points.pop();
      }
    }
  }
  if (board[i][j - 1] === target[index] && !res) {
    hasPoint = false;
    for (k = 0; k < points.length; k ++) {
      if (points[k][0] === i && points[k][1] === j - 1) {
        hasPoint = true;
        break;
      }
    }
    if (!hasPoint) {
      if (index === target.length - 1) {
        res = true;
      } else {
        points.push([i, j - 1]);
        if(findWord(board, i, j - 1, points, target, index + 1)) {
          res = true;
        }
        points.pop();
      }
    }
  }
  return res;
}

// Runtime: 5724 ms
