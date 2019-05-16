/**
* 1005. Maximize Sum Of Array After K Negations
* https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  let minus = [];
  let sum = 0;
  let min = Number.MAX_VALUE;
  for (let n of A) {
    if (n < 0) {
      minus.push(n);
    } else {
      sum += n;
    }
    min = Math.min(min, Math.abs(n));
  }
  minus.sort((a, b) => a - b);
  for (let n of minus) {
    if (K > 0) {
      sum += -n;
      K --;
    } else {
      sum += n;
    }
  }
  if (K > 0 && K % 2 === 1) {
    sum -= min * 2;
  }
  return sum;
};

// Runtime: 72 ms, faster than 55.50% of JavaScript online submissions for Maximize Sum Of Array After K Negations.
// Memory Usage: 35.7 MB, less than 37.41% of JavaScript online submissions for Maximize Sum Of Array After K Negations.
