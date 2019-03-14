/**
* 926. Flip String to Monotone Increasing
* https://leetcode.com/problems/flip-string-to-monotone-increasing/
*/

/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
  let n = S.length;
  let prevOnes = new Array(n);
  let afterZeros = new Array(n);
  let prevOneCount = 0;
  for (let i = 0; i < n; i ++) {
    prevOnes[i] = prevOneCount;
    if (S[i] === "1") {
      prevOneCount ++;
    }
  }
  let afterZeroCount = 0;
  for (let i = n - 1; i >= 0; i --) {
    afterZeros[i] = afterZeroCount;
    if (S[i] === "0") {
      afterZeroCount ++;
    }
  }
  let res = prevOnes[0] + afterZeros[0];
  for (let i = 1; i < n; i ++) {
    res = Math.min(res, prevOnes[i] + afterZeros[i]);
  }
  return res;
};

// Runtime: 68 ms, faster than 63.64% of JavaScript online submissions for Flip String to Monotone Increasing.
// Memory Usage: 37.8 MB, less than 100.00% of JavaScript online submissions for Flip String to Monotone Increasing.
