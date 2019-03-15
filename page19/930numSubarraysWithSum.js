/**
* 930. Binary Subarrays With Sum
* https://leetcode.com/problems/binary-subarrays-with-sum/
*/

// In an array A of 0s and 1s, how many non-empty subarrays have sum S?

/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let preZero = 0;
  let afterZero = 0;
  let count = 0;
  for (; end < A.length; end ++) {
    sum += A[end];
    if (sum === S) {
      afterZero ++;
    } else if (sum === S + 1) {
      preZero = 0;
      while (A[start] === 0) {
        preZero ++;
        start ++;
      }
      sum --;
      start ++;
      count += (preZero + 1) * (afterZero + 1);
      afterZero = 0;
    }
  }
  if (sum === S) {
    preZero = 0;
    while (A[start] === 0) {
      preZero ++;
      start ++;
    }
    count += (preZero + 1) * (afterZero + 1);
  }
  return count;
};
