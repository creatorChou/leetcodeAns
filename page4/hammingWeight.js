/**
*	191. Number of 1 Bits
*	https://leetcode.com/problems/number-of-1-bits/description/
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
	let count = 0;
	for (var i = 0; i < 32; i ++) {
		if (n % 2 === 1) {
			count ++;
		}
		n = Math.floor(n / 2)
	}
	return count;
};

var hammingWeight2 = function(n) {
	let count = 0;
	while (n > 0) {
		if (n % 2 === 1) {
			count ++;
		}
		n >>>= 1;
	}
	return count;
};

console.log(hammingWeight(1))
