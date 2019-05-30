/**
* 1035. Uncrossed Lines
* https://leetcode.com/problems/uncrossed-lines/
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
  let memo = new Array(A.length);
  let idxMap = {};
  for (let i = 0; i < B.length; i ++) {
    if (!idxMap[B[i]]) idxMap[B[i]] = [];
    idxMap[B[i]].push(i);
  }
  for (let i = 0; i < A.length; i ++) {
    if (idxMap[A[i]]) {
      memo[i] = idxMap[A[i]];
    } else {
      memo[i] = [];
    }
  }
  let dp = new Array(A.length);
  for (let i = 0; i < A.length; i ++) {
    dp[i] = {};
  }
  return getMaxLines(memo, dp, 0, null);
};

function getMaxLines (memo, dp, idx1, idx2) {
  if (idx1 >= memo.length) return 0;
  if (idx2 !== null && dp[idx1][idx2] != null) return dp[idx1][idx2];
  let arr = memo[idx1];
  let max = getMaxLines(memo, dp, idx1 + 1, idx2);
  for (let idx of arr) {
    if (idx2 === null || idx > idx2) {
      max = Math.max(max, getMaxLines(memo, dp, idx1 + 1, idx) + 1);
    }
  }
  dp[idx1][idx2] = max;
  return max;
}

let A = [1,4,2];
let B = [1,4,2];

console.log(maxUncrossedLines(A, B));

// Runtime: 92 ms, faster than 20.00% of JavaScript online submissions for Uncrossed Lines.
// Memory Usage: 39.5 MB, less than 43.40% of JavaScript online submissions for Uncrossed Lines.
