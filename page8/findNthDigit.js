/**
* 400. Nth Digit
* https://leetcode.com/problems/nth-digit/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  if (n < 10) return n;
  let base = 10;
  let digit = 2;
  let sum = 9;
  while (sum < n) {
    sum += 9 * base * digit;
    digit ++;
    base *= 10;
  }
  digit --;
  let num = base - Math.floor((sum - n) / digit) - 1 + "";
  let idx = digit - (sum - n) % digit - 1;
  return parseInt(num[idx])
};

// 1 in 10: 10

// 1 in 100: 9 * 10 * 2 + 10

// 1 in 1000: 9 * 100 * 3 + 190

// 8,9,1,0,1,1,1,2

// 2890 => 1000

console.log(findNthDigit(50))

// beat 100%!!!
