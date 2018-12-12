/**
* 738. Monotone Increasing Digits
* https://leetcode.com/problems/monotone-increasing-digits/
*/

/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  if (N < 10) return N;
  let digits = [];
  let carry = 0;
  while (N > 0) {
    let digit = N % 10;
    if (digits[0] != null && digit > digits[0]) {
      for (let i = 0; i < digits.length; i ++) {
        digits[i] = 9;
      }
      digit --;
    }
    digits.unshift(digit);
    N = Math.floor(N / 10);
  }
  if (digits[0] === 0) digits.shift();
  let num = 0;
  for (let i = 0; i < digits.length; i ++) {
    num += digits[i] * Math.pow(10, digits.length - i - 1);
  }
  return num;
};

// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Monotone Increasing Digits.
