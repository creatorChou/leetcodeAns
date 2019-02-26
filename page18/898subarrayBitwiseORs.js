/**
* 898. Bitwise ORs of Subarrays
* https://leetcode.com/problems/bitwise-ors-of-subarrays/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var subarrayBitwiseORs = function(A) {
  let set = new Set();
  for (let i = 0; i < A.length; i ++) {
    let prev = A[i];
    set.add(prev);
    for (let j = i + 1; j < A.length; j ++) {
      prev |= A[j];
      set.add(prev);
    }
  }
  return set.size;
};

// Time Limit Exceeded
