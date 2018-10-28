/**
* Arithmetic Slices II - Subsequence
* https://leetcode.com/problems/arithmetic-slices-ii-subsequence/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let dp = [];
  for (let i = 0; i < A.length; i ++) {
    dp[i] = [];
  }
  let sum = 0;
  for (let i = 0; i < A.length - 2; i ++) {
    for (let j = i + 1; j < A.length - 1; j ++) {
      let diff = A[j] - A[i];
      if (dp[i][diff]) continue;
      dp[i][diff] = true;
      dp[j][diff] = true;
      let count = 2;
      let curr = A[j];
      for (let k = j + 1; k < A.length; k ++) {
        let newDiff = A[k] - curr;
        if (newDiff < diff) {
          continue;
        } else if (newDiff > diff) {
          break;
        } else {
          curr = A[k];
          dp[k][diff] = true;
          count ++;
        }
      }
      if (count >= 3) {
        sum += getSubSum(count);
      }
    }
  }
  return sum;
};

function getSubSum (len) {
  let sum = 0;
  for (var i = 3; i <= len; i ++) {
    sum += len - i + 1;
  }
  return sum;
}
