/**
*	241. Different Ways to Add Parentheses
*	https://leetcode.com/problems/different-ways-to-add-parentheses/description/
*/

/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
	let result = [], hasOperator = false, l, r, j, k;
	for (let i = 0; i < input.length; i ++) {
		if (input[i] === "+" || input[i] === "-" || input[i] === "*") {
			l = diffWaysToCompute(input.slice(0, i));
			r = diffWaysToCompute(input.slice(i + 1));
			hasOperator = true;
			for (j = 0; j < l.length; j ++) {
				for (k = 0; k < r.length; k ++) {
					if (input[i] === "+") {
						result.push(l[j] + r[k])
					} else if (input[i] === "-") {
						result.push(l[j] - r[k])
					} else {
						result.push(l[j] * r[k])
					}
				}
			}
		}
	}
	if (hasOperator) {
		return result;
	} else {
		return [parseInt(input)];
	}
};

console.log(diffWaysToCompute("2*3-4*5+5*6"))
