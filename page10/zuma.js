/**
* Zuma Game
* https://leetcode.com/problems/zuma-game/
*/

/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function(board, hand) {
  if (board.length === 0) return 0;
  if (hand.length === 0) return -1;
  let map = {};
  for (let i = 0; i < hand.length; i ++) {
    if (map[hand[i]]) {
      map[hand[i]] ++;
    } else {
      map[hand[i]] = 1;
    }
  }
  return dfs(board, map);
};

function dfs (board, map) {
  console.log(board, map);
  for (let i = 0; i < board.length; i ++) {
    if (board[i] === 0) {
      return -1;
    }
  }
  let min = Number.MAX_VALUE;
  let hasSame = false;
  let allIllegal = true;
  for (let i = 1; i < board.length; i ++) {
    if (board[i] === board[i - 1] && map[board[i]] > 0) {
      hasSame = true;
      let newBoard = board.slice(0, i) + board[i] + board.slice(i);
      map[board[i]] --;
      let next = dfs(deleteBalls(newBoard), map);
      if (next !== -1) {
        allIllegal = false;
        min = Math.min(min, next);
      }
      map[board[i]] ++;
    }
  }
  if (!hasSame) {
    let count = 0;
    for (let i = 0; i < board.length; i ++) {
      if (map[board[i]] == null || map[board[i]] < 2) {
        return -1;
      }
      count += 2;
    }
    return count;
  }
  if (allIllegal) {
    return -1;
  } else {
    return min + 1;
  }
}

function deleteBalls (balls) {
  let stack = [];
  let preBall = null;
  for (let i = 0; i < balls.length; i ++) {
    if (stack.length === 0) {
      if (balls[i] !== preBall) {
        stack.push(balls[i]);
        preBall = null;
      }
    } else {
      let last = stack[stack.length - 1];
      if (last[0] === balls[i]) {
        if (last.length === 2) {
          preBall = stack.pop()[0];
        } else {
          stack[stack.length - 1] = last + balls[i];
        }
      } else {
        if (balls[i] !== preBall) {
          stack.push(balls[i]);
          preBall = null;
        }
      }
    }
  }
  return stack.join("");
}

console.log(findMinStep("WWGWGW", "GWBWR"));
