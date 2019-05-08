/**
* 955. Delete Columns to Make Sorted II
* https://leetcode.com/problems/delete-columns-to-make-sorted-ii/
*/

/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let len = A[0].length;
  let strs = new Array(A.length).fill("");
  let count = 0;
  for (let j = 0; j < len; j ++) {
    let newStrs = strs.slice();
    for (let i = 0; i < A.length; i ++) {
      newStrs[i] += A[i][j];
    }
    if (isSorted(newStrs)) {
      strs = newStrs;
    } else {
      count ++;
    }
  }
  return count;
};

function isSorted(strs) {
  for (let i = 1; i < strs.length; i ++) {
    if (strs[i-1] > strs[i]) return false;
  }
  return true;
}

// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Delete Columns to Make Sorted II.
// Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Delete Columns to Make Sorted II.

