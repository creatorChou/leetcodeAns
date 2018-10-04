/**
* 397. Integer Replacement
* https://leetcode.com/problems/integer-replacement/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  let count = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      if (n === 3 || ((n >>> 1) & 1) === 0) {
        n --;
      } else {
        n ++;
      }
    }
    count ++;
  }
  return count;
};

console.log(integerReplacement(1351));
// 91 -> 90 -> 45 -> 46 -> 23 -> 24 -> 12 -> 6 -> 3 -> 2 -> 1
// 91 -> 92 -> 46 -> 23