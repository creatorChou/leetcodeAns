/**
* 400. Nth Digit
* https://leetcode.com/problems/nth-digit/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let digit = 1,  // 当前位数
      count = 0,  // 总个数
      num;
  while (count < n) {
    num = 9 * Math.pow(10, digit - 1) * digit;
    if (count + num < n) {
      count += num;
      digit ++;
    } else {
      break;
    }
  }
  digit --;
  let base = Math.pow(10, digit);
  return (n - base) % digit;
};

// 1 in 10: 10

// 1 in 100: 9 * 10 * 2 + 10

// 1 in 1000: 9 * 100 * 3 + 190

// 8,9,1,0,1,1,1,2

// 2890 => 1000

findNthDigit(2900);
