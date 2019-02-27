/**
* 908. Smallest Range I
* https://leetcode.com/problems/smallest-range-i/
*/

// Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].
// After this process, we have some array B.
// Return the smallest possible difference between the maximum value of B and the minimum value of B.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  let max = A[0], min = A[0], n = A.length;
  for (let i = 1; i < n; i ++) {
    max = Math.max(A[i], max);
    min = Math.min(A[i], min);
  }
  return Math.max(0, max - min - 2 * K);
};

// Runtime: 64 ms, faster than 66.81% of JavaScript online submissions for Smallest Range I.
// Memory Usage: 36.3 MB, less than 13.33% of JavaScript online submissions for Smallest Range I.
