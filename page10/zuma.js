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
  return dfs(board, map, {});
};

function dfs (board, map, memo) {
  if (memo[board] != null) return memo[board];
  if (board.length === 0) return 0;
  for (let i = 0; i < board.length; i ++) {
    if (board[i] === 0) {
      return -1;
    }
  }
  let min = Number.MAX_VALUE;
  let allIllegal = true;
  for (let i = 0; i < board.length; i ++) {
    if (map[board[i]] > 0) {
      let newBoard = board.slice(0, i + 1) + board[i] + board.slice(i + 1);
      map[board[i]] --;
      let next = dfs(deleteBalls(newBoard), map, memo);
      if (next !== -1) {
        allIllegal = false;
        min = Math.min(min, next);
      }
      map[board[i]] ++;
    }
  }
  if (allIllegal) {
    memo[board] = -1;
  } else {
    memo[board] = min + 1;
  }
  return memo[board];
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
          preBall = null;
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

// deleteBalls("RGGBYYWWWYYBBGRGG")

console.log(findMinStep("RGGBYRRYWWYYBBGRGG", "RRYWG"));

// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions for Zuma Game.
