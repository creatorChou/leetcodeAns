/**
* Divide Two Integers
* https://leetcode.com/problems/divide-two-integers/description/
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === 0) return 0;
  let sum = 0;
  let count = 0;
  let minus = 1;
  if (divisor > 0 && dividend < 0 || divisor < 0 && dividend > 0) {
    minus = -1;
  }
  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);
  while (sum + divisor < dividend) {
    sum += divisor;
    count ++;
  }
  return minus * count;
};

console.log(divide(10, 3));
