/**
* 718. Maximum Length of Repeated Subarray
* https://leetcode.com/problems/maximum-length-of-repeated-subarray/
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let len = 0;
  for (let i = 0; i < A.length; i ++) {
    for (let j = 0; j < B.length; j ++) {
      let k = 0;
      while (A[i + k] != null && B[j + k] != null && A[i + k] === B[j + k]) k ++;
      len = Math.max(k, len);
    }
  }
  return len;
};

var findLength = function(A, B) {
  let len = 0;
  let map = {};
  for (let i = 0; i < A.length; i ++) {
    if (map[A[i]]) {
      map[A[i]].push(i);
    } else {
      map[A[i]] = [i];
    }
  }
  for (let i = 0; i < B.length; i ++) {
    let indices = map[B[i]];
    if (!indices) continue;
    let k = 0;
    for (let idx of indices) {
      let k = 0;
      while (A[idx + k] != null && B[i + k] != null && A[idx + k] === B[i + k]) k ++;
      len = Math.max(len, k);
    }
  }
  return len;
};

