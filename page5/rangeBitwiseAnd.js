/**
*	201. Bitwise AND of Numbers Range
*	https://leetcode.com/problems/bitwise-and-of-numbers-range/description/
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
	if (m === n) return m;
	m = m - (m & 1);
	n = n - (n & 1);
	let res, num, num1 = 0, num2 = 0, i;
	for (i = 1; i < 32; i ++) {
		num = Math.pow(2, i);
		if (num <= m) {
			num1 = num;
		} else {
			num2 = num;
			break;
		}
	}
	if (num2 <= n) {
		return 0;
	}
	res = m;
	for (i = m; i <= n; i += 2) {
		if (res === num1) {
			break;
		} else {
			res &= i;
		}
	}
	return res;
};
