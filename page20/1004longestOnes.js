/**
* 1004. Max Consecutive Ones III
* https://leetcode.com/problems/max-consecutive-ones-iii/
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let max = 0;
  for (let i = 0; i < A.length; i ++) {
    if (A[i] === 1 && (i === 0 || A[i - 1] === 0)) {
      let rest = K;
      let len = 0;
      for (let j = i; j < A.length; j ++) {
        if (A[j] === 0) {
          if (rest === 0) {
            break;
          } else {
            rest --;
          }
        }
        len ++;
      }
      if (rest > 0) {
        len = Math.min(A.length, len + rest);
      }
      max = Math.max(max, len);
    }
  }
  return max;
};

// Runtime: 320 ms, faster than 15.91% of JavaScript online submissions for Max Consecutive Ones III.
// Memory Usage: 38 MB, less than 100.00% of JavaScript online submissions for Max Consecutive Ones III.

