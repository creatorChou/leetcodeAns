/**
* 910. Smallest Range II
* https://leetcode.com/problems/smallest-range-ii/
*/

// Given an array A of integers, for each integer A[i] we need to choose either x = -K or x = K, and add x to A[i] (only once).

// After this process, we have some array B.

// Return the smallest possible difference between the maximum value of B and the minimum value of B.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function(A, K) {
  A.sort((a, b) => a - b);
  let n = A.length;
  let ans = A[n - 1] - A[0];
  for (let i = 0; i < n - 1; i ++) {
    let hi = Math.max(A[n - 1] - K, A[i] + K);
    let lo = Math.min(A[0] + K, A[i + 1] - K);
    ans = Math.min(ans, hi - lo);
  }
  return ans;
};

// Runtime: 108 ms, faster than 38.46% of JavaScript online submissions for Smallest Range II.
// Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Smallest Range II.
