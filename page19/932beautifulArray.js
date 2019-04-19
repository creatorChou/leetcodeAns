/**
* 932. Beautiful Array
* https://leetcode.com/problems/beautiful-array/
*/

// For some fixed N, an array A is beautiful if it is a permutation of the integers 1, 2, ..., N, such that:
// For every i < j, there is no k with i < k < j such that A[k] * 2 = A[i] + A[j].
// Given N, return any beautiful array A.  (It is guaranteed that one exists.)

/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray = function(N) {
  let nums = [];
  for (let i = 0; i < N; i ++) {
    nums[i] = i + 1;
  }
  sort(nums, 0, N - 1);
};


function sort(nums, lo, hi) {
  if (lo >= hi) return;
  
}
