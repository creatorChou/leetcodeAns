/**
* 896. Monotonic Array
* https://leetcode.com/problems/monotonic-array/
*/

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  if (A[0] < A[A.length - 1]) {
    for (let i = 1; i < A.length; i ++) {
      if (A[i] < A[i - 1]) return false;
    }
  } else {
    for (let i = 1; i < A.length; i ++) {
      if (A[i] > A[i - 1]) return false;
    }
  }
  return true;
};

// Runtime: 88 ms, faster than 56.71% of JavaScript online submissions for Monotonic Array.
// Memory Usage: 40.3 MB, less than 73.33% of JavaScript online submissions for Monotonic Array.
