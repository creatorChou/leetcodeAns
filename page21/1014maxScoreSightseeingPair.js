/**
* 1014. Best Sightseeing Pair
* https://leetcode.com/problems/best-sightseeing-pair/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  let prev = A[0];
  let max = 0;
  for (let i = 1; i < A.length; i ++) {
    max = Math.max(prev + A[i] - i, max);
    prev = Math.max(prev, A[i] + i);
  }
  return max;
};

// Runtime: 64 ms, faster than 98.52% of JavaScript online submissions for Best Sightseeing Pair.
// Memory Usage: 40.2 MB, less than 45.40% of JavaScript online submissions for Best Sightseeing Pair.
