/**
* 279. Perfect Squares
* https://leetcode.com/problems/perfect-squares/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (n === 0) return 0;
  let num = 1,
      product,
      step,
      minStep = n;
  while ((product = num * num) <= n) {
    step = Math.floor(n / product) + numSquares(n % product);
    minStep = Math.min(step, minStep);
    num ++;
  }
  return minStep;
};

console.log(numSquares(88));

// 1240ms
