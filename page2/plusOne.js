/**
* 66. Plus One
* https://leetcode.com/problems/plus-one/description/
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i --) {
    digits[i] += 1 + carry;
    if (digits[i] === 10) {
      digits[i] = 0;
      carry = 1;
    } else {
      carry = 0;
      break;
    }
  }
  if (carry === 1) {
    digits.shift(1);
  }
  return digits;
};
