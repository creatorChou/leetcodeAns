/**
* 400. Nth Digit
* https://leetcode.com/problems/nth-digit/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let digit = 0,
      count = 1,
      num;
  while (count < n) {
    num = Math.pow(10, digit);
    count += digit * num * 9;
    digit ++;
  }
  digit --;
  count -= digit * num * 9;
  console.log(digit, num, count);

};

// 1 in 10: 10

// 1 in 100: 9 * 10 * 2 + 10

// 1 in 1000: 9 * 100 * 3 + 190

// 8,9,1,0,1,1,1,2

// 2890 => 1000

findNthDigit(2900);
