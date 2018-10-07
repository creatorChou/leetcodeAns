/**
*	385. Mini Parser
*	https://leetcode.com/problems/mini-parser/description/
*/

/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
	if (s[0] !== "[") {
		let nestedInteger = new NestedInteger();
		nestedInteger.setInteger(parseInt(s));
		return nestedInteger;
	}
	let stack = [];
	let val = "";
	for (let i = 0; i < s.length; i ++) {
		switch (s[i]) {
			case "[":
				val = "";
				stack.push(new NestedInteger());
				break;
			case "]":
				if (val !== "") {
					let nestedInteger = new NestedInteger();
					nestedInteger.setInteger(parseInt(val));
					stack[stack.length - 1].add(nestedInteger);
					val = "";
				}
				if (stack.length > 1) {
					let last = stack.pop();
					stack[stack.length - 1].add(last);
				}
				break;
			case ",":
				if (val !== "") {
					let nestedInteger = new NestedInteger();
					nestedInteger.setInteger(parseInt(val));
					stack[stack.length - 1].add(nestedInteger);
				}
				val = "";
				break;
			default:
				val += s[i];
				break;
		}
	}
	return stack[0];
};
