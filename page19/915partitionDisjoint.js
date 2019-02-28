/**
* 915. Partition Array into Disjoint Intervals
* https://leetcode.com/problems/partition-array-into-disjoint-intervals/
*/

// Given an array A, partition it into two (contiguous) subarrays left and right so that:

// Every element in left is less than or equal to every element in right.
// left and right are non-empty.
// left has the smallest possible size.

// Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.

/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
  let n = A.length;
  let memo = new Array(n);
  let min = A[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    memo[i] = min;
    min = Math.min(A[i], min);
  }
  let count = 0;
  let max = A[0];
  for (let i = 0; i < n; i ++) {
    max = Math.max(max, A[i]);
    count ++;
    if (max <= memo[i]) {
      break;
    }
  }
  return count;
};

// Runtime: 68 ms, faster than 62.00% of JavaScript online submissions for Partition Array into Disjoint Intervals.
// Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions for Partition Array into Disjoint Intervals.
