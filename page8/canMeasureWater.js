/**
*	365. Water and Jug Problem
*	https://leetcode.com/problems/water-and-jug-problem/description/
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
	if (z > x + y) return false;
	if (z % x === 0 || z % y === 0) return true;
	let max = Math.max(x, y);
	let min = Math.min(x, y);
	if (min === 0) {
    return max === z;
  }
	if (max === min) {
    return z % x === 0;
  }
  let rest = min - max % min;
  if (rest + max === z) return true;
  while (max > z) {
  	max -= rest;
  	if (max === z) {
  		return true;
  	}
  }
	return false;
};
