/**
* 918. Maximum Sum Circular Subarray
* https://leetcode.com/problems/maximum-sum-circular-subarray/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
  let memo = [];
  let i = 0;
  while (A[i] > 0) i ++;
  let sum = 0;
  for (let j = i + 1; j < A.length; j ++) {
    if (A[j] >= 0) {
      sum += A[j];
    } else {
      memo[j] = sum;
      sum = 0;
    }
  }
};


// ref: https://en.wikipedia.org/wiki/Maximum_subarray_problem
