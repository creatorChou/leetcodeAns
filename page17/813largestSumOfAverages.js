/**
* 813. Largest Sum of Averages
* https://leetcode.com/problems/largest-sum-of-averages/
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function(A, K) {
  return getMaxAve(A, {}, 0, K);
};

function getMaxAve(A, memo, start, rest) {
  let sum = 0;
  let key = `${start}-${rest}`;
  if (memo[key] != null) return memo[key];
  if (rest === 1) {
    for (let i = start; i < A.length; i ++) {
      sum += A[i];
    }
    memo[key] = sum / (A.length - start);
    return memo[key];
  }
  let max = 0;
  for (let i = start; i < A.length - rest + 1; i ++) {
    sum += A[i];
    let ave = sum / (i - start + 1);
    let afterAve = getMaxAve(A, memo, i + 1, rest - 1);
    max = Math.max(max, ave + afterAve);
  }
  memo[key] = max;
  return max;
}

// Runtime: 164 ms, faster than 7.69% of JavaScript online submissions for Largest Sum of Averages.
// top-down
