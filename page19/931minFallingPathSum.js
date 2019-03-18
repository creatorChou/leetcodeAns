/**
* 931. Minimum Falling Path Sum
* https://leetcode.com/problems/minimum-falling-path-sum/
*/

/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
  let dp = new Array(A.length);
  for(let i=0; i<A.length; i ++) {
    dp[i] = [];
  }
  dp[A.length - 1] = A[A.length - 1];
  for(let i = A.length - 2; i >= 0; i --) {
    for(let j = 0; j < A[i].length; j ++) {
      let a = dp[i + 1][j - 1] || 100;
      let b = dp[i + 1][j];
      let c = dp[i + 1][j + 1] || 100;
      dp[i][j] = Math.min(a, b, c) + A[i][j];
    }
  }
  return Math.min(...dp[0]);
};

// Runtime: 68 ms, faster than 73.28% of JavaScript online submissions for Minimum Falling Path Sum.
// Memory Usage: 37.3 MB, less than 45.45% of JavaScript online submissions for Minimum Falling Path Sum.
