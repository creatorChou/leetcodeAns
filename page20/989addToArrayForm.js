/**
* 989. Add to Array-Form of Integer
* https://leetcode.com/problems/add-to-array-form-of-integer/
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let i = A.length - 1;
  while (K > 0) {
    let n = K % 10;
    K = Math.floor(K / 10);
    if (i >= 0) {
      K += Math.floor((A[i] + n) / 10);
      A[i] = (A[i] + n) % 10;
      i --;
    } else {
      A.unshift(n);
    }
  }
  return A;
};

// Runtime: 108 ms, faster than 99.22% of JavaScript online submissions for Add to Array-Form of Integer.
// Memory Usage: 38.1 MB, less than 91.97% of JavaScript online submissions for Add to Array-Form of Integer.

