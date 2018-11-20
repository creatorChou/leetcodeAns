/**
* 566. Reshape the Matrix
* https://leetcode.com/problems/reshape-the-matrix/
*/

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (!nums || !nums.length) return nums;
  let len = nums.length;
  let innlen = nums[0].length;
  if (r * c !== len * innlen) return nums;
  let result = new Array(r);
  for (let i = 0; i < r; i ++) {
    result[i] = [];
  }
  let idx = 0;
  for (let i = 0; i < len; i ++) {
    for (let j = 0; j < innlen; j ++) {
      if (result[idx].length === c) {
        idx ++;
      }
      result[idx].push(nums[i][j]);
    }
  }
  return result;
};

// Runtime: 84 ms, faster than 100.00% of JavaScript online submissions for Reshape the Matrix.
