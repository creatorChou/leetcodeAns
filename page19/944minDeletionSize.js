/**
* 944. Delete Columns to Make Sorted
* https://leetcode.com/problems/delete-columns-to-make-sorted/
*/

/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let len = A[0].length;
  let strs = new Array(len).fill("");
  let memo = new Array(len).fill(true);
  let count = 0;
  for (let s of A) {
    for (let i = 0; i < len; i ++) {
      if (!memo[i]) continue;
      let last = strs[i].slice(-1);
      if (s[i] >= last) {
        strs[i] = strs[i] + s[i];
      } else {
        memo[i] = false;
        count ++;
      }
    }
  }
  return count;
};

// Runtime: 196 ms, faster than 11.53% of JavaScript online submissions for Delete Columns to Make Sorted.
// Memory Usage: 52.7 MB, less than 7.69% of JavaScript online submissions for Delete Columns to Make Sorted.


/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let count = 0;
  for (let i = 0; i < A[0].length; i ++) {
    for (let j = 1; j < A.length; j ++) {
      if (A[j][i] < A[j-1][i]) {
        count ++;
        break;
      }
    }
  }
  return count;
};

// Runtime: 76 ms, faster than 98.39% of JavaScript online submissions for Delete Columns to Make Sorted.
// Memory Usage: 39.6 MB, less than 15.38% of JavaScript online submissions for Delete Columns to Make Sorted.
