/**
* 4Sum II
* https://leetcode.com/problems/4sum-ii/
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let map = {}
  let len = A.length;
  let count = 0;
  for (let i = 0; i < len; i ++) {
    for (let j = 0; j < len; j ++) {
      let key = A[i] + B[j];
      if (!map[key]) {
        map[key] = 1;
      } else {
        map[key] ++;
      }
    }
  }
  for (let i = 0; i < len; i ++) {
    for (let j = 0; j < len; j ++) {
      let key = -(C[i] + D[j]);
      if (map[key]) {
        count += map[key];
      }
    }
  }
  return count;
};
