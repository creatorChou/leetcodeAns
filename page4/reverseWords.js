/**
*	151. Reverse Words in a String
*	https://leetcode.com/problems/reverse-words-in-a-string/description/
*/

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
	let words = [],
			temp = "";

	for (let i = 0; i < str.length; i ++) {
		if(str[i] === " ") {
			if (temp !== "") {
				words.unshift(temp);
				temp = "";
			}
		} else {
			temp += str[i];
		}
	}
	words.unshift(temp);
	return words.join(" ").trim();
};

console.log(reverseWords("   a   b  "));
