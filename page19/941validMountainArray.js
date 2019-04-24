/**
* 941. Valid Mountain Array
* https://leetcode.com/problems/valid-mountain-array/
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if (A.length < 3 || A[1] <= A[0]) return false;
  let up = true;
  for (let i = 2; i < A.length; i ++) {
    if (A[i] > A[i - 1]) {
      if (!up) return false;
    } else if (A[i] < A[i - 1]) {
      if (up) {
        up = false;
      }
    } else {
      return false;
    }
  }
  return up ? false : true;
};

// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Valid Mountain Array.
// Memory Usage: 37 MB, less than 23.08% of JavaScript online submissions for Valid Mountain Array.
