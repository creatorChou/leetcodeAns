/**
* Pow(x, n)
* https://leetcode.com/problems/powx-n/description/
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }
  let minus = n < 0;
  n = Math.abs(n);
  if (minus) {
    x = 1 / x;
  }
  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  } else {
    return x * myPow(x * x, Math.floor(n / 2));
  }
};

console.log(myPow(2.10000, 10));
