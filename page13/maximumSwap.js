/**
* 670. Maximum Swap
* https://leetcode.com/problems/maximum-swap/
*/

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  let digits = [];
  let maxes = [];
  let max = 0;
  while (num > 0) {
    let digit = num % 10;
    digits.unshift(digit);
    max = Math.max(max, digit);
    maxes.unshift(max);
    num = Math.floor(num / 10);
  }
  let temp = null;
  let swap = null;
  for (let i = 0; i < digits.length; i ++) {
    if (digits[i] < maxes[i]) {
      temp = digits[i];
      swap = maxes[i];
      digits[i] = maxes[i];
      break;
    }
  }
  for (let i = digits.length - 1; i >= 0; i --) {
    if (digits[i] === swap) {
      digits[i] = temp;
      break;
    }
  }
  let result = 0;
  for (let i = digits.length - 1; i >= 0; i --) {
    result += digits[i] * Math.pow(10, digits.length - 1 - i);
  }
  return result;
};

function maximumSwap(num) {
  let len = String(num).length;
  let digits = [];
  let target = null;
  let big1 = null;
  let big2 = null;
  for (let i = len - 1; i >= 0; i--) {
    let digit = num % 10;
    digits[i] = digit;
    if (target === null) {
      target = i;
    } else {
      if (big2 === null) {
        if (big1 === null) {
          if (digit <= digits[target]) {
            big1 = target;
            target = i;
          } else {
            big1 = null;
            target = i;
          }
        } else {
          if (digit < digits[big1]) {
            target = i;
          } else {
            big2 = i;
          }
        }
      } else {
        if (digit < digits[big2]) {
          target = i;
          if (digits[big1] < digits[big2]) {
            big1 = big2;
          }
          big2 = null;
        } else if (digit > digits[big2]) {
          big2 = i;
        }
      }
    }
    num = Math.floor(num / 10);
  }
  if (target !== null && big1 !== null) {
    digits[target] ^= digits[big1];
    digits[big1] ^= digits[target];
    digits[target] ^= digits[big1];
  }
  let result = 0;
  for (let i = digits.length - 1; i >= 0; i --) {
    result += digits[i] * Math.pow(10, digits.length - 1 - i);
  }
  return result;
}

// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Maximum Swap.
