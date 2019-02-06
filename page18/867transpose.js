/**
* 867. Transpose Matrix
* https://leetcode.com/problems/transpose-matrix/
*/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  if (A.length === 0) return [];
  let result = [];
  for (let i = 0; i < A[0].length; i ++) {
    let arr = [];
    for (let j = 0; j < A.length; j ++) {
      arr[j] = A[j][i];
    }
    result.push(arr);
  }
  return result;
};

// Runtime: 92 ms, faster than 81.40% of JavaScript online submissions for Transpose Matrix.
