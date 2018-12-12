/**
* 728. Self Dividing Numbers
* https://leetcode.com/problems/self-dividing-numbers/
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let result = [];
  for (let i = left; i <= right; i ++) {
    let num = i;
    let digits = [];
    while (num > 0) {
      digits.unshift(num % 10)
      num = Math.floor(num / 10);
    }
    let hasIdx = -1;
    let isValid = true;
    for (let j = 0; j < digits.length; j ++) {
      if (hasIdx !== -1) {
        digits[j] = 1;
      } else {
        if (digits[j] === 0) {
          digits[j] = 1;
          hasIdx = j;
        } else if (i % digits[j] !== 0) {
          isValid = false;
          break;
        }
      }
    }
    if (isValid && hasIdx === -1) {
      result.push(i);
    } else {
      if (hasIdx !== -1 && hasIdx !== digits.length - 1) {
        let newNum = 0;
        for (let j = 0; j < digits.length; j ++) {
          newNum += digits[j] * Math.pow(10, digits.length - j - 1);
        }
        i = newNum - 1;
      }
    }
  }
  return result;
};

// Runtime: 64 ms, faster than 63.10% of JavaScript online submissions for Self Dividing Numbers.
