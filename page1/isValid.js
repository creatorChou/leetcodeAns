/**
*	Valid Parentheses
*	https://leetcode.com/problems/valid-parentheses/description/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if (s.length === 0) return true;
	if (s.length % 2 !== 0) return false;

	let brackets = {
		')': '(',
		']': '[',
		'}': '{'
	};

	let stack = [];

	for (let i = 0; i < s.length; i ++) {
		if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
			stack.push(s[i]);
		} else {
			if (stack.pop() !== brackets[s[i]]) {
				return false;
			}
		}
	}

	return stack.length === 0;
};

console.log(isValid("()"));
