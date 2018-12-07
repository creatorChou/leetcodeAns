/**
* 661. Image Smoother
* https://leetcode.com/problems/image-smoother/
*/

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  let result = new Array(M.length);
  for (let i = 0; i < M.length; i++) {
    result[i] = new Array(M[i].length);
  }
  for (let i = 0; i < M.length; i ++) {
    for (let j = 0; j < M[i].length; j ++) {
      let count = 0;
      let sum = 0;
      for (let k = i - 1; k <= i + 1; k ++) {
        if (!M[k]) continue;
        for (let p = j - 1; p <= j + 1; p ++) {
          if (M[k][p] == null) continue;
          count ++;
          sum += M[k][p];
        }
      }
      result[i][j] = Math.floor(sum / count);
    }
  }
  return result;
};

// Runtime: 164 ms, faster than 51.38% of JavaScript online submissions for Image Smoother.
