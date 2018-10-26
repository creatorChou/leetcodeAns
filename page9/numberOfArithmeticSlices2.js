/**
* Arithmetic Slices II - Subsequence
* https://leetcode.com/problems/arithmetic-slices-ii-subsequence/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let sum = 0;
  for (let i = 0; i < A.length; i ++) {
    for (let j = A.length - 1; j >= i; j --) {
      let len = j - i + 1;
      let interval = 1;
      let count = 0;
      while ((len - 1) / interval >= 2) {
        if ((len - 1) % interval === 0) {
          count ++;
        }
        interval ++;
      }
      sum += count;
    }
  }
  return sum;
};

function getSubSum (len) {
  let sum = 0;
  for (let i = 0; i < len; i ++) {
    for (let j = len - 1; j >= i; j --) {
      let len = j - i + 1;
      let interval = 1;
      let count = 0;
      while ((len - 1) / interval >= 2) {
        if ((len - 1) % interval === 0) {
          count ++;
        }
        interval ++;
      }
      sum += count;
    }
  }
  return sum;
}
