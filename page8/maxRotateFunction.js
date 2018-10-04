/**
* 396. Rotate Function
* https://leetcode.com/problems/rotate-function/description/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  let sum = 0;
  let fsum = 0;
  const len = A.length;
  for (let i = 0; i < len; i ++) {
    sum += A[i];
    fsum += i * A[i];
  }
  let max = fsum;
  for (let i = len - 1; i > 0; i--) {
    let f = sum - len * A[i] + fsum;
    fsum = f;
    max = Math.max(f, max);
  }
  return max;
};

console.log(maxRotateFunction([4, 3, 2, 6]));
