/**
*	372. Super Pow
*	https://leetcode.com/problems/super-pow/description/
*/

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
  let c = a;
  let count = 1;
  while (c < 1337) {
  	c *= a;
  	count ++;
  }
  let rest = c % 1337;
  let restSum = 0;
  for (let i = b.length - 1; i >= 0; i--) {
  	let counta = Math.pow(10, (b.length - i)) * b[i];
  	restSum += counta * rest;
  }
  console.log(restSum)
  return restSum / c % 1337;
};

console.log(superPow(21, [1,0,1]))
