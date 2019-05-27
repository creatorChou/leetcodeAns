/**
* 1027. Longest Arithmetic Sequence
* https://leetcode.com/problems/longest-arithmetic-sequence/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
  let max = 0;
  let dp = {};
  for (let i = 0; i < A.length; i ++) {
    for (let j = 0; j < i; j ++) {
      let diff = A[i] - A[j];
      if (!dp[diff]) dp[diff] = {};
      let len = 1;
      if (dp[diff][j]) {
        len = dp[diff][j];
      }
      len ++;
      dp[diff][i] = len;
      max = Math.max(max, len);
    }
  }
  return max;
};

let arr = [44,46,22,68,45,66,43,9,37,30,50,67,32,47,44,11,15,4,11,6,20,64,54,54,61,63,23,43,3,12,51,61,16,57,14,12,55,17,18,25,19,28,45,56,29,39,52,8,1,21,17,21,23,70,51,61,21,52,25,28];

console.log(longestArithSeqLength(arr));

// Runtime: 2604 ms, faster than 20.71% of JavaScript online submissions for Longest Arithmetic Sequence.
// Memory Usage: 242.4 MB, less than 15.57% of JavaScript online submissions for Longest Arithmetic Sequence.
