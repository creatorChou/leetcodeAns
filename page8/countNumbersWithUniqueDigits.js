/**
*	357. Count Numbers with Unique Digits
*	https://leetcode.com/problems/count-numbers-with-unique-digits/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
	if (n === 0) return 1;
	let max = 9;
	let result = 1;
	for (let i = 0; i < n; i ++) {
		result *= max;
		if (i > 1) {
			max --;
		}
	}
	return result + countNumbersWithUniqueDigits(n - 1);
};

	// 0: 1
	// 1: 9 + 1
	// 2: 9*9 + 9 + 1 = 91
	// 3: 9*9*8 + 91 = 648 + 91 = 739
