/**
* 907. Sum of Subarray Minimums
* https://leetcode.com/problems/sum-of-subarray-minimums/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
  const mod = 1000000007;
  let sum = 0;
  for (let i = 0; i < A.length; i ++) {
    let min = A[i];
    let turnSum = A[i];
    for (let j = i + 1; j < A.length; j ++) {
      min = Math.min(A[j], min);
      turnSum += min;
    }
    sum += turnSum % mod;
  }
  return sum % mod;
};
// Runtime: 4468 ms


// monotonous increase stack
/**
let stack = [];
for (let i = 0; i < A.length; i ++) {
  while (stack.length > 0 && stack[stack.length - 1] > A[i]) {
    stack.pop();
  }
  stack.push(A[i]);
}
*/


/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
  const mod = 1000000007;
  let sum = 0;
  let N = A.length;

  return sum % mod;
};

