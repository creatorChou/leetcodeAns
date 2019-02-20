/**
* 877. Stone Game
* https://leetcode.com/problems/stone-game/
*/

/**
  Alex and Lee play a game with piles of stones.  There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].

  The objective of the game is to end with the most stones.  The total number of stones is odd, so there are no ties.

  Alex and Lee take turns, with Alex starting first.  Each turn, a player takes the entire pile of stones from either the beginning or the end of the row.  This continues until there are no more piles left, at which point the person with the most stones wins.

  Assuming Alex and Lee play optimally, return True if and only if Alex wins the game.
*/

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  let len = piles.length;
  let dp = new Array(len);
  for (let i = 0; i < len; i ++) {
    dp[i] = new Array(len).fill(null);
  }
  getMax(piles, dp, 0, len - 1)
  return dp[0][len - 1] > dp[1][len - 1] || dp[0][len - 1] > dp[0][len - 2];
};

function getMax(piles, dp, start, end) {
  if (dp[start][end] !== null) {
    return dp[start][end];
  }
  if (start === end - 1) {
    if (piles[start] > piles[end]) {
      dp[start][end] = piles[start];
      dp[end][end] = piles[end];
    } else {
      dp[start][end] = piles[end];
      dp[start][start] = piles[start];
    }
    return 0;
  }
  
  let before1 = getMax(piles, dp, start, end - 1) + piles[end];
  let before2 = getMax(piles, dp, start + 1, end) + piles[start];
  dp[start][end] = Math.max(before1, before2);
  return Math.max(dp[start][end - 1], dp[start + 1][end]);
}
// wrong



function stoneGame1 () {
  return true;
}
// [1,2,3,4,5,6]
// pick 1, 3, 5 or 2, 4, 6.

function stoneGame2 (piles) {
  let len = piles.length;
  let dp = new Array(len);
  for (let i = 0; i < len; i ++) {
    dp[i] = new Array(len);
    dp[i][i] = piles[i];
  }
  // d: distance, i: start index
  for (let d = 1; d < len; d ++) {
    for (let i = 0; i < len - d; i ++) {
      dp[i][i + d] = Math.max(dp[i + 1][i + d], dp[i][i + d - 1]);
    }
  }
  return dp[0][len - 1] > 0;
}
// 2D bottom up

// public boolean stoneGame(int[] p) {
//     int[] dp = Arrays.copyOf(p, p.length);;
//     for (int d = 1; d < p.length; d++)
//         for (int i = 0; i < p.length - d; i++)
//             dp[i] = Math.max(p[i] - dp[i + 1], p[i + d] - dp[i]);
//     return dp[0] > 0;
// }
// 1D bottom up JAVA
